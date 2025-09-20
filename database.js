const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const dbPath = path.join(__dirname, 'sweatbox.db');

// Create a new database connection
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error connecting to database:', err.message);
    } else {
        console.log('Connected to SQLite database');
        createTables();
    }
});

// Create necessary tables
function createTables() {
    // Telegram users table
    db.run(`
        CREATE TABLE IF NOT EXISTS telegram_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            chat_id INTEGER UNIQUE NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating telegram_users table:', err.message);
        }
    });
}

// Add a new Telegram user
function addTelegramUser(username, chatId) {
    return new Promise((resolve, reject) => {
        db.run(
            'INSERT INTO telegram_users (username, chat_id) VALUES (?, ?)',
            [username, chatId],
            function(err) {
                if (err) {
                    if (err.message.includes('UNIQUE constraint failed')) {
                        reject(new Error('This user is already registered'));
                    } else {
                        reject(err);
                    }
                } else {
                    resolve({ id: this.lastID, username, chatId });
                }
            }
        );
    });
}

// Get all Telegram users
function getTelegramUsers() {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM telegram_users ORDER BY created_at DESC', [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// Remove a Telegram user by chat ID
function removeTelegramUser(chatId) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM telegram_users WHERE chat_id = ?', [chatId], function(err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('User not found'));
            } else {
                resolve({ success: true });
            }
        });
    });
}

module.exports = {
    addTelegramUser,
    getTelegramUsers,
    removeTelegramUser
};
