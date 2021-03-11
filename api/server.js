const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const server = express();

const user = require('./users/users-router');

server.use('/api/users', user);

server.use(express.json(), morgan('dev'), cors());

// remember express by default cannot parse JSON in request bodies

// global middlewares and the user's router need to be connected here

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`);
});




module.exports = server;