// srimandir-backend/routes.js
const express = require('express');
const router = express.Router();
const db = require('./db');

router.get('/bookings', (req, res) => {
  db.all('SELECT * FROM bookings', (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ bookings: rows });
  });
});

router.post('/bookings', (req, res) => {
  const { name, date } = req.body;
  db.run('INSERT INTO bookings (name, date) VALUES (?, ?)', [name, date], function(err) {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({ id: this.lastID });
  });
});

module.exports = router;
