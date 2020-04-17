
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Surf and Turf'},
    {recipe_name: 'Unagi Don'},
    {recipe_name: 'Mushroom Onion Soup'}
  ]);
};
