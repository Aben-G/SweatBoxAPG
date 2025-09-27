const express = require('express');
const cors = require('cors');
const axios = require('axios');
const session = require('express-session');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const multer = require('multer');
require('dotenv').config();

// Import database functions
const { 
    addTelegramUser, 
    getTelegramUsers, 
    removeTelegramUser,
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    deleteProducts
} = require('./database');

// Database setup
const dbPath = path.join(__dirname, 'sweatbox.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
    }
});

// Helper function to run SQL queries with promises
function dbRun(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.run(sql, params, function(err) {
            if (err) reject(err);
            else resolve(this);
        });
    });
}

// Helper function to get all rows with promises
function dbAll(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.all(sql, params, (err, rows) => {
            if (err) reject(err);
            else resolve(rows);
        });
    });
}

// Helper function to get a single row with promises
function dbGet(sql, params = []) {
    return new Promise((resolve, reject) => {
        db.get(sql, params, (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });
}

const app = express();
const PORT = process.env.PORT || 3001;

// Telegram bot configuration (moved to avoid duplicate declarations)

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

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/products/');
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, 'product-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB limit
    },
    fileFilter: function (req, file, cb) {
        // Accept only image files
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only image files are allowed!'), false);
        }
    }
});

// --- Helper Functions ---

// Function to send message to Telegram
async function sendToTelegram(message) {
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID; // Fallback chat ID
    
    if (!TELEGRAM_BOT_TOKEN) {
        console.warn('Telegram bot token not set. Skipping notification.');
        return true; // Don't block form submission
    }

    try {
        // Get all Telegram users from database
        const users = await dbAll('SELECT chat_id as chatId, username FROM telegram_users');
        let recipients = [];
        
        if (users.length > 0) {
            recipients = users;
        } else if (TELEGRAM_CHAT_ID) {
            // Fallback to environment variable if no users in database
            recipients = [{ chatId: TELEGRAM_CHAT_ID, username: 'Default User' }];
        }

        if (recipients.length === 0) {
            console.warn('No Telegram recipients configured. Skipping notification.');
            return true;
        }

        let successCount = 0;
        const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

        for (const recipient of recipients) {
            try {
                await axios.post(url, {
                    chat_id: recipient.chatId,
                    text: message,
                    parse_mode: 'HTML'
                });
                successCount++;
            } catch (error) {
                console.error(`Failed to send to chat ${recipient.chatId}:`, error.message);
            }
        }

        return successCount > 0;
    } catch (error) {
        console.error('Error sending Telegram message:', error);
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
        const submission = { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone || '',
            message: req.body.message,
            timestamp: new Date().toISOString()
        };
        
        if (!submission.firstName || !submission.lastName || !submission.email || !submission.message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save to database
        await dbRun(
            'INSERT INTO submissions (type, data) VALUES (?, ?)',
            ['contact', JSON.stringify(submission)]
        );

        const telegramMessage = `
🏋️ <b>New Contact Form Submission - SweatBox APG</b>

👤 <b>Name:</b> ${submission.firstName} ${submission.lastName}
📧 <b>Email:</b> ${submission.email}
📱 <b>Phone:</b> ${submission.phone || 'Not provided'}

💬 <b>Message:</b>
${submission.message}

⏰ <b>Submitted:</b> ${new Date(submission.timestamp).toLocaleString()}
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
        const submission = { 
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone || '',
            selectedPlan: req.body.selectedPlan,
            startDate: req.body.startDate || null,
            timestamp: new Date().toISOString()
        };

        if (!submission.firstName || !submission.lastName || !submission.email || !submission.selectedPlan) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save to database
        await dbRun(
            'INSERT INTO submissions (type, data) VALUES (?, ?)',
            ['membership', JSON.stringify(submission)]
        );

        const telegramMessage = `
🏋️ <b>New Membership Registration - SweatBox APG</b>

👤 <b>Name:</b> ${submission.firstName} ${submission.lastName}
📧 <b>Email:</b> ${submission.email}
📱 <b>Phone:</b> ${submission.phone || 'Not provided'}

💳 <b>Selected Plan:</b> ${submission.selectedPlan}
📅 <b>Start Date:</b> ${submission.startDate || 'Not specified'}

⏰ <b>Submitted:</b> ${new Date(submission.timestamp).toLocaleString()}
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
        const orderId = 'ORD-' + Date.now() + '-' + Math.random().toString(36).substr(2, 5).toUpperCase();
        
        const submission = {
            orderId: orderId,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            phone: req.body.phone,
            items: req.body.items || [],
            total: req.body.total || '0.00',
            address: req.body.address || '',
            city: req.body.city || '',
            state: req.body.state || '',
            zipCode: req.body.zipCode || '',
            country: req.body.country || '',
            timestamp: new Date().toISOString()
        };

        if (!submission.firstName || !submission.lastName || !submission.email || !submission.phone) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Save to database
        await dbRun(
            'INSERT INTO submissions (type, data) VALUES (?, ?)',
            ['order', JSON.stringify(submission)]
        );

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

⏰ <b>Ordered:</b> ${new Date(submission.timestamp).toLocaleString()}
        `;

        const success = await sendToTelegram(telegramMessage);
        
        if (success) {
            res.json({ 
                success: true, 
                message: 'Order placed successfully!',
                orderId: orderId,
                orderDate: submission.timestamp
            });
        } else {
            res.json({ 
                success: true, 
                message: 'Order placed, but Telegram notification failed.',
                orderId: orderId,
                orderDate: submission.timestamp
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
app.get('/admin/dashboard', requireLogin, async (req, res) => {
    try {
        // Fetch all submissions from the database
        const contactSubmissions = await dbAll(
            "SELECT * FROM submissions WHERE type = 'contact' ORDER BY created_at DESC"
        );
        const membershipSubmissions = await dbAll(
            "SELECT * FROM submissions WHERE type = 'membership' ORDER BY created_at DESC"
        );
        const orderSubmissions = await dbAll(
            "SELECT * FROM submissions WHERE type = 'order' ORDER BY created_at DESC"
        );
        
        // Fetch products count
        const products = await getProducts();
        
        // Safely parse the JSON data for each submission
        const parseSubmissions = (subs) => 
            subs.map(sub => {
                try {
                    return {
                        ...sub,
                        data: JSON.parse(sub.data)
                    };
                } catch (e) {
                    console.error(`Failed to parse JSON for submission ID: ${sub.id}`, e);
                    return null; // Return null for submissions that fail to parse
                }
            }).filter(Boolean); // Filter out any null entries
            
        res.render('dashboard', { 
            contactSubmissions: parseSubmissions(contactSubmissions),
            membershipSubmissions: parseSubmissions(membershipSubmissions),
            orderSubmissions: parseSubmissions(orderSubmissions),
            products: products
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        res.status(500).send('Error loading dashboard');
    }
});

// Telegram settings page (protected)
app.get('/admin/telegram', requireLogin, async (req, res) => {
    try {
        const telegramUsers = await dbAll('SELECT chat_id as chatId, username, created_at as createdAt FROM telegram_users ORDER BY created_at DESC');
        res.render('telegram-settings', { 
            telegramUsers,
            botToken: process.env.TELEGRAM_BOT_TOKEN || null,
            title: 'Telegram Settings',
            currentPage: 'telegram-settings'
        });
    } catch (error) {
        console.error('Error fetching Telegram users:', error);
        res.status(500).send('Error loading Telegram settings');
    }
});

// Add Telegram user (protected)
app.post('/admin/telegram/add', requireLogin, async (req, res) => {
    const { username } = req.body;
    
    if (!username) {
        return res.json({ success: false, error: 'Username is required' });
    }

    try {
        const response = await axios.get(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/getUpdates`);
        const updates = response.data.result;
        
        // Find the user in updates
        const userUpdate = updates.reverse().find(update => {
            const from = update.message?.from;
            if (!from) return false;
            
            // Check if username matches (with or without @)
            const searchUsername = username.startsWith('@') ? username.substring(1) : username;
            return (
                (from.username && from.username.toLowerCase() === searchUsername.toLowerCase()) ||
                (from.first_name && from.first_name.toLowerCase() === searchUsername.toLowerCase()) ||
                (from.last_name && from.last_name.toLowerCase() === searchUsername.toLowerCase()) ||
                (from.first_name && from.last_name && 
                 `${from.first_name} ${from.last_name}`.toLowerCase() === searchUsername.toLowerCase())
            );
        });

        if (!userUpdate) {
            return res.json({ 
                success: false, 
                error: 'User not found. Please make sure the user has sent a message to the bot first.'
            });
        }

        const chatId = userUpdate.message.chat.id;
        const user = userUpdate.message.from;
        const displayName = user.username || `${user.first_name || ''} ${user.last_name || ''}`.trim();

        // Add user to database
        await dbRun('INSERT INTO telegram_users (username, chat_id) VALUES (?, ?)', [displayName, chatId]);
        
        res.json({ 
            success: true, 
            message: `User "${displayName}" added successfully!`,
            userInfo: {
                name: displayName,
                chatId: chatId
            }
        });
    } catch (error) {
        console.error('Error adding Telegram user:', error);
        if (error.response && error.response.data) {
            res.json({ success: false, error: `Telegram API Error: ${error.response.data.description}` });
        } else {
            res.json({ success: false, error: 'Failed to connect to Telegram. Please check your bot token.' });
        }
    }
});

// Remove Telegram user (protected)
app.post('/admin/telegram/remove', requireLogin, async (req, res) => {
    const { chatId } = req.body;
    
    if (!chatId) {
        return res.json({ success: false, error: 'Chat ID is required' });
    }

    try {
        const result = await dbRun('DELETE FROM telegram_users WHERE chat_id = ?', [chatId]);
        
        if (result.changes === 0) {
            return res.json({ success: false, error: 'User not found' });
        }
        
        res.json({ 
            success: true, 
            message: 'User removed successfully' 
        });
    } catch (error) {
        console.error('Error removing Telegram user:', error);
        res.json({ 
            success: false, 
            error: error.message || 'Failed to remove user' 
        });
    }
});

// Debug endpoint to see available users (protected)
app.get('/admin/telegram/debug', requireLogin, async (req, res) => {
    try {
        const response = await axios.get(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`);
        const updates = response.data.result;
        
        const availableUsers = [];
        const seenUsers = new Set();
        
        for (const update of updates.reverse()) {
            if (update.message && update.message.from) {
                const from = update.message.from;
                const userId = from.id;
                
                if (!seenUsers.has(userId)) {
                    seenUsers.add(userId);
                    availableUsers.push({
                        id: userId,
                        username: from.username || `${from.first_name || ''} ${from.last_name || ''}`.trim(),
                        first_name: from.first_name,
                        last_name: from.last_name
                    });
                }
            }
        }
        
        res.json({ success: true, users: availableUsers });
    } catch (error) {
        console.error('Error fetching Telegram updates:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch Telegram updates' });
    }
});

// Delete submissions (protected)
app.post('/admin/submissions/delete', requireLogin, async (req, res) => {
    const { ids } = req.body;

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return res.json({ success: false, error: 'No submission IDs provided' });
    }

    try {
        const placeholders = ids.map(() => '?').join(',');
        const result = await dbRun(`DELETE FROM submissions WHERE id IN (${placeholders})`, ids);

        if (result.changes === 0) {
            return res.json({ success: false, error: 'No submissions found to delete' });
        }

        res.json({ success: true, message: `${result.changes} submissions deleted successfully` });
    } catch (error) {
        console.error('Error deleting submissions:', error);
        res.json({ success: false, error: 'Failed to delete submissions' });
    }
});

// --- Products Management Routes ---

// Products management page (protected)
app.get('/admin/products', requireLogin, async (req, res) => {
    try {
        const products = await getProducts();
        res.render('products', { products });
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).send('Error loading products page');
    }
});

// Add new product (protected)
app.post('/admin/products/add', requireLogin, async (req, res) => {
    try {
        const { name, description, price, category, image, stockQuantity } = req.body;
        
        if (!name || !price || !category) {
            return res.json({ success: false, error: 'Name, price, and category are required' });
        }

        const productData = {
            name: name.trim(),
            description: description?.trim() || '',
            price: parseFloat(price),
            category: category.trim(),
            image: image?.trim() || '',
            stockQuantity: parseInt(stockQuantity) || 0
        };

        const result = await addProduct(productData);
        res.json({ success: true, message: 'Product added successfully', product: result });
    } catch (error) {
        console.error('Error adding product:', error);
        res.json({ success: false, error: 'Failed to add product' });
    }
});

// Update product (protected)
app.post('/admin/products/update', requireLogin, async (req, res) => {
    try {
        const { id, name, description, price, category, image, stockQuantity, isActive } = req.body;
        
        if (!id || !name || !price || !category) {
            return res.json({ success: false, error: 'ID, name, price, and category are required' });
        }

        const productData = {
            name: name.trim(),
            description: description?.trim() || '',
            price: parseFloat(price),
            category: category.trim(),
            image: image?.trim() || '',
            stockQuantity: parseInt(stockQuantity) || 0,
            isActive: isActive === 'true' || isActive === true
        };

        await updateProduct(id, productData);
        res.json({ success: true, message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        res.json({ success: false, error: error.message || 'Failed to update product' });
    }
});

// Delete products (protected)
app.post('/admin/products/delete', requireLogin, async (req, res) => {
    try {
        const { ids } = req.body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return res.json({ success: false, error: 'No product IDs provided' });
        }

        const result = await deleteProducts(ids);
        res.json({ 
            success: true, 
            message: `${result.deletedCount} product(s) deleted successfully` 
        });
    } catch (error) {
        console.error('Error deleting products:', error);
        res.json({ success: false, error: 'Failed to delete products' });
    }
});

// Get product by ID (protected)
app.get('/admin/products/:id', requireLogin, async (req, res) => {
    try {
        const product = await getProductById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, error: 'Product not found' });
        }
        res.json({ success: true, product });
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch product' });
    }
});

// Upload product image (protected)
app.post('/admin/products/upload-image', requireLogin, upload.single('image'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ success: false, error: 'No image file uploaded' });
        }
        
        const imageUrl = `/images/products/${req.file.filename}`;
        res.json({ success: true, imageUrl });
    } catch (error) {
        console.error('Error uploading image:', error);
        res.status(500).json({ success: false, error: 'Failed to upload image' });
    }
});

// --- Public API Routes for Products ---

// Get all active products for the shop page
app.get('/api/products', async (req, res) => {
    try {
        const products = await getProducts(true); // Only active products
        // Transform the data to match the client-side format
        const formattedProducts = products.map(product => ({
            id: product.id.toString(),
            name: product.name,
            description: product.description,
            price: parseFloat(product.price),
            category: product.category,
            image: product.image || '/images/placeholder-product.jpg',
            stockQuantity: product.stock_quantity
        }));
        res.json(formattedProducts);
    } catch (error) {
        console.error('Error fetching products for API:', error);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

// Logout route
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
