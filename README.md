# SweatBox APG - Telegram Bot Integration

This project includes a Telegram bot integration for handling form submissions from the SweatBox APG website.

## 🤖 Setup Instructions

### Step 1: Create Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat and send `/start`
3. Create a new bot with `/newbot`
4. Choose a name: `SweatBox APG Bot`
5. Choose a username: `sweatboxapg_bot` (or similar)
6. Save the bot token provided by BotFather

### Step 2: Get Your Chat ID

1. Start a chat with your new bot
2. Send any message to the bot
3. Visit: `https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getUpdates`
4. Look for `"chat":{"id":XXXXXXX}` - this is your chat ID

### Step 3: Configure Environment Variables

1. Copy `.env.example` to `.env`
2. Fill in your bot token and chat ID:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
PORT=3000
```

### Step 4: Install Dependencies

```bash
npm install
```

### Step 5: Start the Server

```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

## 🚀 Features

- ✅ Contact form submissions sent to Telegram
- ✅ Membership registration notifications
- ✅ Beautiful formatted messages with emojis
- ✅ Error handling and user feedback
- ✅ CORS enabled for frontend integration

## 📱 Message Format

### Contact Form
```
🏋️ New Contact Form Submission - SweatBox APG

👤 Name: John Doe
📧 Email: john@example.com
📱 Phone: +1234567890

💬 Message:
Hello, I'm interested in joining your gym...

⏰ Submitted: 1/20/2025, 3:30:00 PM
```

### Membership Registration
```
🏋️ New Membership Registration - SweatBox APG

👤 Name: Jane Smith
📧 Email: jane@example.com
📱 Phone: +1234567890

💳 Selected Plan: monthly
📅 Start Date: 2025-01-25

⏰ Submitted: 1/20/2025, 3:30:00 PM
```

## 🔧 API Endpoints

- `POST /api/contact` - Handle contact form submissions
- `POST /api/membership` - Handle membership registrations
- `GET /api/health` - Health check endpoint

## 🛠️ Development

The server serves static files from the root directory, so you can access your website at `http://localhost:3000` when the server is running.

## 📝 Notes

- Make sure to keep your `.env` file secure and never commit it to version control
- The bot token and chat ID are sensitive information
- Test the forms thoroughly before going live
