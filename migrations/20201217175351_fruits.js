
exports.up = async function(knex) {
  await knex.schema.createTable("fruits", (table) => {
    //   table.integer("id").notNull().unique().primary().. 
    //   same thiing...
      table.increments("id")
      table.text("name").notNull()
        table.float("avgWeightOz").notNull()
        table.boolean("delicious").defaultTo(true)
        table.text("color")
  })
};

exports.down = async function(knex) {
  
};
