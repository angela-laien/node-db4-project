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

// server.get('/api/ingredients', (req, res) => {
//   // get all animals from the database
//   // include species name
//   db('ingredients as i')
//     .leftJoin('recipes as r', 'r.id', 'i.recipes_id')
//     .select('i.id', 'i.ingredient_name', 'r.recipe_name')
//   .then(ingredients => {
//     res.status(200).json(ingredients);
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

// // add ingredient
// server.post('/api/ingredients', (req, res) => {
//   db('ingredients').insert(req.body)
//   .then(ids => {
//     const id = ids[0];

//     db('ingredients')
//       .where({ id })
//       .first()
//     .then(ingredient => {
//       res.status(201).json(ingredient);
//     });
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

// // remove recipe
// server.delete('/api/recipes/:id', (req, res) => {
//   db('recipes')
//     .where({ id: req.params.id })
//     .del()
//   .then(count => {
//     if (count > 0) {
//       res.status(204).end();
//     } else {
//       res.status(404).json({ message: 'recipe not found' });
//     }
//   })
//   .catch(error => {
//     res.status(500).json(error);
//   });
// });

module.exports = server;