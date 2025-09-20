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

```

## 🛡 Security Features

- **Session Management** - Secure admin authentication
- **Environment Variables** - Sensitive data protection
- **Input Validation** - Form data validation
- **CORS Protection** - Cross-origin request security
- **Error Handling** - Graceful error management

## 📊 Admin Dashboard Features

### Form Management
- View all contact form submissions
- Track membership registrations
- Monitor store orders with complete details
- Export capabilities (future enhancement)

### Telegram Management
- Add/remove notification recipients
- View current configured users
- Test notification system
- Manage bot configuration

## 🎯 Production Considerations

### Performance
- Static file serving optimized
- Session management configured for production
- Error logging implemented
- Health check endpoint available

### Scalability
- In-memory storage (upgrade to database recommended)
- Multi-user Telegram notifications
- Modular code structure
- Easy to extend with new features

## 📞 Support

For issues or questions:
1. Check the admin dashboard for system status
2. Verify Telegram bot configuration
3. Review server logs in Render dashboard
4. Test API endpoints using the health check

## 🔄 Updates and Maintenance

### Regular Tasks
- Monitor admin dashboard for submissions
- Check Telegram notifications are working
- Review server logs in Render
- Update dependencies periodically

### Backup Recommendations
- Export form submissions regularly
- Keep environment variables backed up
- Monitor uptime and performance

---

**SweatBox APG** - Professional gym management system with modern web interface and real-time notifications.
