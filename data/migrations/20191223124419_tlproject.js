exports.up = function(knex) {
  return knex.schema
    .createTable("users", tbl => {
      tbl.increments("userID");
      tbl
        .string("username", 128)
        .notNullable()
        .unique();
      tbl.string("password", 128).notNullable();
      tbl.string("firstName", 128).notNullable();
      tbl.string("lastName", 128).notNullable();
    })
    .createTable("toDoList", tbl => {
      tbl.increments("toDoId");
      tbl.string("task", 128).notNullable();
      tbl.boolean("Completed").notNullable();
    })
    .createTable("Notes", tbl => {
      tbl.increments("notesId");
      tbl.string("Title", 128).notNullable();
      tbl.string("Notes", 1000).notNullable();
      tbl.string("Module", 255).notNullable();
      tbl.string("SubCatergory", 255).notNullable();
      tbl
        .integer("userId")
        .unsigned()
        .notNullable()
        .references("userID")
        .inTable("users");
      tbl
        .integer("toDoId")
        .unsigned()
        .notNullable()
        .references("toDoId")
        .inTable("toDoList");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("users")
    .dropTableIfExists("toDoList")
    .dropTableIfExists("Notes");
};
