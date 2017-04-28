import envalid from 'envalid';
import execa from 'execa';
import knexBuilder from 'knex';
import configs from '../knexfile';

type Env = {
  DB_HOST: string,
  DB_PASS: string,
  DB_USER: string,
};

const {str}    = envalid;
const env: Env = envalid.cleanEnv(process.env, {
  DB_HOST: str({ default: '127.0.0.1' }),
  DB_PASS: str({ default: '' }),
  DB_USER: str({ default: 'alexander' }),
});
const cmd = env.DB_PASS === '' ? 'createdb' : `PGPASS=${env.DB_PASS} createdb`;
execa(cmd, [
  `--username=${env.DB_USER}`,
  `--host=${env.DB_HOST}`,
  `${configs.test.connection.database}`
])
  .then(console.log)
  .then(() => {
    const knex = knexBuilder(configs.test);
    return knex.migrate.latest()
  })
  .then(() => { console.log('migration finished'); })
  .catch(console.error);
