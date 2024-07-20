// srimandir-backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});


const routes = require('./routes');
app.use('/api', routes);
