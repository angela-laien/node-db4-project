
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {ingredient_name: 'Lobster'},
    {ingredient_name: 'Steak'},
    {ingredient_name: 'Tbsp of butter'},
    {ingredient_name: 'Tbsp of garlic parsley salt'},
    {ingredient_name: 'Tbsp of lemon pepper'},
    {ingredient_name: 'Frozen barbeque freshwater eel'},
    {ingredient_name: 'Egg'},
    {ingredient_name: 'baby spinach'},
    {ingredient_name: 'white rice'},
    {ingredient_name: 'white onion'},
    {ingredient_name: 'white mushroom'},
    {ingredient_name: 'French baguette'},
    {ingredient_name: 'Mozzarella cheese'},
    {ingredient_name: 'Lipton onion soup mix'},
    {ingredient_name: 'Parsley'},
    {ingredient_name: 'Cup of water'}
  ]); 
};
