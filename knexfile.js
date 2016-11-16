module.exports = {
  development: {
    client:     'postgresql',
    connection: {
      database: 'jtl-jobs',
      user:     'alexander',
    },
  },

  staging: {
    client:     'postgresql',
    connection: {
      database: 'jtl-jobs',
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

  production: {
    client:     'postgresql',
    connection: {
      database: 'jtl-jobs',
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
