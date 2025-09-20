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
        } else {
            console.log('telegram_users table is ready');
        }
    });

    // Submissions table for contact forms, memberships, and orders
    db.run(`
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL, -- 'contact', 'membership', or 'order'
            data TEXT NOT NULL, -- JSON string of submission data
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating submissions table:', err.message);
        } else {
            console.log('submissions table is ready');
        }
    });
}

// Close the database connection when done
db.close((err) => {
    if (err) {
        console.error('Error closing database:', err.message);
    } else {
        console.log('Database initialization complete');
    }
});
