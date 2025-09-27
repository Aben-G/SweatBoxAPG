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

    // Products table
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            price DECIMAL(10,2) NOT NULL,
            category TEXT NOT NULL,
            image TEXT,
            stock_quantity INTEGER DEFAULT 0,
            is_active BOOLEAN DEFAULT 1,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating products table:', err.message);
        } else {
            console.log('Products table created successfully');
        }
    });

    // Submissions table (if not exists)
    db.run(`
        CREATE TABLE IF NOT EXISTS submissions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT NOT NULL,
            data TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Error creating submissions table:', err.message);
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

// Add a new product
function addProduct(productData) {
    return new Promise((resolve, reject) => {
        const { name, description, price, category, image, stockQuantity } = productData;
        db.run(
            `INSERT INTO products (name, description, price, category, image, stock_quantity) 
             VALUES (?, ?, ?, ?, ?, ?)`,
            [name, description || '', price, category, image || '', stockQuantity || 0],
            function(err) {
                if (err) {
                    reject(err);
                } else {
                    resolve({ id: this.lastID, ...productData });
                }
            }
        );
    });
}

// Get all products
function getProducts(activeOnly = false) {
    return new Promise((resolve, reject) => {
        const query = activeOnly 
            ? 'SELECT * FROM products WHERE is_active = 1 ORDER BY created_at DESC'
            : 'SELECT * FROM products ORDER BY created_at DESC';
        
        db.all(query, [], (err, rows) => {
            if (err) {
                reject(err);
            } else {
                resolve(rows);
            }
        });
    });
}

// Get product by ID
function getProductById(id) {
    return new Promise((resolve, reject) => {
        db.get('SELECT * FROM products WHERE id = ?', [id], (err, row) => {
            if (err) {
                reject(err);
            } else {
                resolve(row);
            }
        });
    });
}

// Update product
function updateProduct(id, productData) {
    return new Promise((resolve, reject) => {
        const { name, description, price, category, image, stockQuantity, isActive } = productData;
        db.run(
            `UPDATE products SET 
             name = ?, description = ?, price = ?, category = ?, 
             image = ?, stock_quantity = ?, is_active = ?, updated_at = CURRENT_TIMESTAMP
             WHERE id = ?`,
            [name, description, price, category, image, stockQuantity, isActive ? 1 : 0, id],
            function(err) {
                if (err) {
                    reject(err);
                } else if (this.changes === 0) {
                    reject(new Error('Product not found'));
                } else {
                    resolve({ success: true });
                }
            }
        );
    });
}

// Delete product
function deleteProduct(id) {
    return new Promise((resolve, reject) => {
        db.run('DELETE FROM products WHERE id = ?', [id], function(err) {
            if (err) {
                reject(err);
            } else if (this.changes === 0) {
                reject(new Error('Product not found'));
            } else {
                resolve({ success: true });
            }
        });
    });
}

// Delete multiple products
function deleteProducts(ids) {
    return new Promise((resolve, reject) => {
        const placeholders = ids.map(() => '?').join(',');
        db.run(`DELETE FROM products WHERE id IN (${placeholders})`, ids, function(err) {
            if (err) {
                reject(err);
            } else {
                resolve({ success: true, deletedCount: this.changes });
            }
        });
    });
}

module.exports = {
    addTelegramUser,
    getTelegramUsers,
    removeTelegramUser,
    addProduct,
    getProducts,
    getProductById,
    updateProduct,
    deleteProduct,
    deleteProducts
};
