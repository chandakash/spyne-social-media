import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('follows', function (table) {
    table.integer('follower_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('followed_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.primary(['follower_id', 'followed_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('follows');
}
