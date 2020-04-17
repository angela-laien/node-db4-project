
exports.up = function(knex) {
    return (
        knex.schema
            // recipes        
            .createTable('recipes', tbl => {
                tbl.increments();
                tbl.string('recipe_name', 255).unique().notNullable();
            })
            // ingredients
            .createTable('ingredients', tbl => {
                tbl.increments();
                tbl.string('ingredient_name', 255).notNullable().index();
            })
            // recipes with ingredients
            .createTable('recipes_ingredients', tbl => {
                tbl.increments();
                tbl.string('quantity').notNullable();
                // foreign key
                tbl
                    .integer('recipe_id')
                    .notNullable()
                    .references("id")
                    .inTable("recipes")
                    .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                    .onUpdate("CASCADE");
                // foreign key   
                tbl
                    .integer('ingredient_id')
                    .notNullable()
                    .references("id")
                    .inTable("ingredients")
                    .onDelete("RESTRICT") // 'CASCADE', 'RESTRICT', 'SET NULL', 'DO NOTHING'
                    .onUpdate("CASCADE");
            })
            // steps
            .createTable('steps', tbl => {
                tbl.increments();
                tbl.integer('step_number')
                    .unsigned()
                    .notNullable();
                tbl.text('instructions')
                    .notNullable();
                tbl.integer('recipe_id')
                    .unsigned()
                    .notNullable()
                    .references('id')
                    .inTable('recipes')
                    .onUpdate('CASCADE')
                    .onDelete('CASCADE');
            })
    )
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
