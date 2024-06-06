import { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'pg',
    connection: {
      host: "ep-lively-forest-a5ps44dp.us-east-2.aws.neon.tech",
      user: "social-media_owner",
      password: "An7QgMVFGS2b",
      database: "social-media",
      ssl: {
        rejectUnauthorized: false
      }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './migrations',
    },
    seeds: {
      directory: './seeds',
    }
  },
};

module.exports = config;
