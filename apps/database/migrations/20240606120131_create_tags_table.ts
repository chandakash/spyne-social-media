import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tags', function (table) {
    table.increments('id').primary();
    table.string('name').unique().notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tags');
}
