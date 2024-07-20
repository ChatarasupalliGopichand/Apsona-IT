
const express = require('express')
const router = express.Router()
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./db/database.sqlite')

// Define necessary endpoints for pujas

module.exports = router
