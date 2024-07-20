
const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.sqlite')

router.post('/', (req, res) => {
  const {name, email, puja} = req.body
  db.run(
    'INSERT INTO bookings (name, email, puja) VALUES (?, ?, ?)',
    [name, email, puja],
    function (err) {
      if (err) {
        return res.status(500).send(err.message)
      }
      res.status(200).json({id: this.lastID})
    },
  )
})

module.exports = router
