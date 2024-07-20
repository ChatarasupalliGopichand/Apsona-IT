// srimandir-backend/db.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('srimandir.db');

db.serialize(() => {
  db.run('CREATE TABLE IF NOT EXISTS bookings (id INTEGER PRIMARY KEY, name TEXT, date TEXT)');
});

module.exports = db;
