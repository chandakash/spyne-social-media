import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('likes', function (table) {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('discussion_id').unsigned().references('id').inTable('discussions').onDelete('CASCADE');
    table.integer('comment_id').unsigned().references('id').inTable('comments').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('likes');
}
