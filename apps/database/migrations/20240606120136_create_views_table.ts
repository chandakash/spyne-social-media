import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('views', function (table) {
    table.increments('id').primary();
    table.integer('discussion_id').unsigned().references('id').inTable('discussions').onDelete('CASCADE');
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('view_count').defaultTo(0);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('views');
}
