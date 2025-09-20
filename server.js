const express = require('express');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory storage for submissions (replace with a database in production)
const contactSubmissions = [];
const membershipSubmissions = [];
const orderSubmissions = [];

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Serve all static files from the 'public' directory

// Session Configuration
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_default_session_secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: process.env.NODE_ENV === 'production' } // Use secure cookies in production
}));

// EJS Template Engine
app.set('view engine', 'ejs');

// Telegram Bot Configuration
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;

// Admin Credentials (from .env file)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'password';

// --- Helper Functions ---

// Function to send message to Telegram
async function sendToTelegram(message) {
    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
        console.warn('Telegram credentials not set. Skipping notification.');
        return true; // Don't block form submission
    }
    try {
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        await axios.post(url, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        });
        return true;
    } catch (error) {
        console.error('Error sending to Telegram:', error.response ? error.response.data : error.message);
        return false;
    }
}

// Middleware to protect admin routes
function requireLogin(req, res, next) {
    if (req.session.loggedin) {
        next();
    } else {
        res.redirect('/admin/login');
    }
}

// --- API Routes ---

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const submission = { ...req.body, timestamp: new Date() };
        
        if (!submission.firstName || !submission.lastName || !submission.email || !submission.message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Store submission
        contactSubmissions.unshift(submission);

        const telegramMessage = `
🏋️ <b>New Contact Form Submission - SweatBox APG</b>

👤 <b>Name:</b> ${submission.firstName} ${submission.lastName}
📧 <b>Email:</b> ${submission.email}
📱 <b>Phone:</b> ${submission.phone || 'Not provided'}

💬 <b>Message:</b>
${submission.message}

⏰ <b>Submitted:</b> ${submission.timestamp.toLocaleString()}
        `;

        const success = await sendToTelegram(telegramMessage);
        
        if (success) {
            res.json({ success: true, message: 'Message sent successfully!' });
        } else {
            // Even if Telegram fails, the submission is saved, so don't send a server error to the client
            res.json({ success: true, message: 'Message sent, but Telegram notification failed.' });
        }
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Membership form endpoint
app.post('/api/membership', async (req, res) => {
    try {
        const submission = { ...req.body, timestamp: new Date() };

        if (!submission.firstName || !submission.lastName || !submission.email || !submission.selectedPlan) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Store submission
        membershipSubmissions.unshift(submission);

        const telegramMessage = `
🏋️ <b>New Membership Registration - SweatBox APG</b>

👤 <b>Name:</b> ${submission.firstName} ${submission.lastName}
📧 <b>Email:</b> ${submission.email}
📱 <b>Phone:</b> ${submission.phone || 'Not provided'}

💳 <b>Selected Plan:</b> ${submission.selectedPlan}
📅 <b>Start Date:</b> ${submission.startDate || 'Not specified'}

⏰ <b>Submitted:</b> ${submission.timestamp.toLocaleString()}
        `;

        const success = await sendToTelegram(telegramMessage);
        
        if (success) {
            res.json({ success: true, message: 'Registration submitted successfully!' });
        } else {
            res.json({ success: true, message: 'Registration submitted, but Telegram notification failed.' });
        }
    } catch (error) {
        console.error('Membership form error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Order form endpoint
app.post('/api/order', async (req, res) => {
    try {
        const submission = { ...req.body, timestamp: new Date() };

        if (!submission.firstName || !submission.lastName || !submission.email || !submission.phone) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Generate order ID
        const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
        submission.orderId = orderId;

        // Store submission
        orderSubmissions.unshift(submission);

        // Format items for Telegram
        let itemsList = '';
        if (submission.items && submission.items.length > 0) {
            itemsList = submission.items.map(item => 
                `• ${item.name} - Qty: ${item.quantity} - $${item.price}`
            ).join('\n');
        }

        const telegramMessage = `
🛒 <b>New Order - SweatBox APG</b>

👤 <b>Customer:</b> ${submission.firstName} ${submission.lastName}
📧 <b>Email:</b> ${submission.email}
📱 <b>Phone:</b> ${submission.phone}

🆔 <b>Order ID:</b> ${submission.orderId}
💰 <b>Total:</b> $${submission.total || '0.00'}

📦 <b>Items:</b>
${itemsList || 'No items specified'}

🏠 <b>Shipping Address:</b>
${submission.address || 'Not provided'}
${submission.city || ''} ${submission.state || ''} ${submission.zipCode || ''}
${submission.country || ''}

⏰ <b>Ordered:</b> ${submission.timestamp.toLocaleString()}
        `;

        const success = await sendToTelegram(telegramMessage);
        
        if (success) {
            res.json({ 
                success: true, 
                message: 'Order placed successfully!',
                orderId: orderId,
                orderDate: submission.timestamp.toISOString()
            });
        } else {
            res.json({ 
                success: true, 
                message: 'Order placed, but Telegram notification failed.',
                orderId: orderId,
                orderDate: submission.timestamp.toISOString()
            });
        }
    } catch (error) {
        console.error('Order form error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// --- Admin Routes ---

// Redirect base admin to login
app.get('/admin', (req, res) => {
    res.redirect('/admin/login');
});

// Login page
app.get('/admin/login', (req, res) => {
    res.render('login', { error: null });
});

// Handle login
app.post('/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        req.session.loggedin = true;
        res.redirect('/admin/dashboard');
    } else {
        res.render('login', { error: 'Invalid username or password' });
    }
});

// Dashboard page (protected)
app.get('/admin/dashboard', requireLogin, (req, res) => {
    res.render('dashboard', { contactSubmissions, membershipSubmissions, orderSubmissions });
});

// Logout
app.get('/admin/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.redirect('/admin/dashboard');
        }
        res.redirect('/admin/login');
    });
});

// --- Server Start ---

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`🔐 Admin panel available at http://localhost:${PORT}/admin`);
    console.log(`---`);
    console.log(`Admin Username: ${ADMIN_USERNAME}`);
    console.log(`Admin Password: ${ADMIN_PASSWORD}`);
    console.log(`---`);
    console.log(`📱 Telegram Bot Token: ${TELEGRAM_BOT_TOKEN ? 'Configured' : 'Missing'}`);
    console.log(`💬 Telegram Chat ID: ${TELEGRAM_CHAT_ID ? 'Configured' : 'Missing'}`);
});
