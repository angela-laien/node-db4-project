exports.seed = function(knex) {
  return knex("steps").insert([
      {
        recipe_id: 1,
        step_number: 1,
        instructions: "grill steak for 10 mins with butter on medium fire then add lobster in pan and grill for another 5 mins",
      },
      { 
        recipe_id: 1, 
        step_number: 2, 
        instructions: "sprinkle garlic parsley salt and lemon pepper and ready to serve" 
      },
      {
        recipe_id: 2,
        step_number: 1,
        instructions: "mix 4 eggs with garlic parsley salt and sugar then pour then into heated tamago pan",
      },
      {
        recipe_id: 2,
        step_number: 2,
        instructions: "boil baby spinach",
      },
      { 
        recipe_id: 2, 
        step_number: 3, 
        instructions: "microwave frozen eel for 2 mins and ready to serve" 
      },
      {
        recipe_id: 3,
        step_number: 1,
        instructions: "grill white unions until tender then add mushrooms on medium fire",
      },
      { 
        recipe_id: 3, 
        step_number: 2, 
        instructions: "dissolve Lipton onion soup mix with hot water and pour it into the onion mushroom pan and let it boil for 5 mins" 
      },
      { 
        recipe_id: 3, 
        step_number: 3, 
        instructions: "pour the mushroom onion soup into a oven safe bowl and add french baguette and cheese" 
      },
      {
        recipe_id: 3,
        step_number: 4,
        instructions: "bake in oven on 475 degree until the cheese turn golden brown",
      },
  ]);
};

