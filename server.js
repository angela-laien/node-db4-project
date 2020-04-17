const express = require('express');
const helmet = require('helmet');

const db = require('./data/db-config.js');

const server = express();

server.use(helmet());

server.use(express.json());

server.get('/api/recipes', (req, res) => {
  // get all species from the database
  db('recipes')
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;