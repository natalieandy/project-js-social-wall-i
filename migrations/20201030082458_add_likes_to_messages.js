
exports.up = function(knex) {
  return knex.schema.table('messages', (table) => {
    table.integer('likes').notNullable().defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.table('messages', (table) => {
    table.dropColumn('likes');
  });
};
