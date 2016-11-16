function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.timestamp('updated_at')
      .defaultTo(knex.fn.now())
      .notNullable();
    table.string('source').notNullable();
    table.text('job_description').notNullable();
  });
}

function down(knex) {
  return knex.schema.dropTable('jobs');
}

module.exports = {
  up,
  down,
};
