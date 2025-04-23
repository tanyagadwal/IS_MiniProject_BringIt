const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./ecommerce.db"); // Changed to more appropriate name

// Initialize database tables
db.serialize(() => {
  // Users table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE,
    password TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

  // Reviews table
  db.run(`CREATE TABLE IF NOT EXISTS reviews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    content TEXT NOT NULL,
    order_id TEXT NOT NULL,
    total_amount REAL NOT NULL,
    items_count INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )`);

  console.log("Database tables initialized");
});

// Promisify db methods for async/await
db.runAsync = function (sql, params = []) {
  return new Promise((resolve, reject) => {
    this.run(sql, params, function (err) {
      if (err) return reject(err);
      resolve(this);
    });
  });
};

db.getAsync = function (sql, params = []) {
  return new Promise((resolve, reject) => {
    this.get(sql, params, (err, row) => {
      if (err) return reject(err);
      resolve(row);
    });
  });
};

module.exports = db;
