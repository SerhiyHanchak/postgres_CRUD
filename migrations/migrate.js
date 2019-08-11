
exports.up = function(knex) {
  return knex.schema.createTable('users',(table)=>{
      table.increments();
      table.text('firstName');
      table.text('lastName');
      table.integer('age');
      table.text('gender');
      table.text('login').unique();
      table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTable('users')
};
