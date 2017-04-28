module.exports = {
  development: {
    client:     'postgresql',
    connection: {
      database: 'jtl',
      user:     'alexander',
    },
  },

  staging: {
    client:     'postgresql',
    connection: {
      database: 'jtl',
      user:     'jtl',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  test: {
    client:     'postgresql',
    connection: {
      database: 'jtl-test',
      user:     'alexander',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client:     'postgresql',
    connection: {
      database: 'jtl',
      user:     'jtl',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
