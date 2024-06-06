import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('discussion_tags', function (table) {
    table.integer('discussion_id').unsigned().references('id').inTable('discussions').onDelete('CASCADE');
    table.integer('tag_id').unsigned().references('id').inTable('tags').onDelete('CASCADE');
    table.primary(['discussion_id', 'tag_id']);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('discussion_tags');
}
