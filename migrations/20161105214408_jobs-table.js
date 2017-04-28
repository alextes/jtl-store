function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.timestamp('createdAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('updatedAt')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.string('source').notNullable();
    table.text('jobDescription').notNullable();
  });
}

function down(knex) {
  return knex.schema.dropTable('jobs');
}

module.exports = {
  up,
  down,
};
