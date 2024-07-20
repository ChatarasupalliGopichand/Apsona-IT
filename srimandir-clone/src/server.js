const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose()
const bookingsRouter = require('./routes/bookings')
const pujasRouter = require('./routes/pujas')

const app = express()
const PORT = 5000

app.use(cors())
app.use(bodyParser.json())
app.use('/api/bookings', bookingsRouter)
app.use('/api/pujas', pujasRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})