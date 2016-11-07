function up(knex) {
  return knex.schema.createTable('jobs', (table) => {
    table.increments();
    table.timestamps();
    table.string('source').notNullable();
    table.text('job-description').notNullable();
  });
}

function down(knex) {
  return knex.schema.dropTable('jobs');
}

module.exports = {
  up,
  down,
};
