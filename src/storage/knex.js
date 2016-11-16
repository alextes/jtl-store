import { default as envalid, str } from 'envalid';
import knexBuilder from 'knex';
import configs from '../../knexfile';

const env = envalid.cleanEnv(process.env, {
  ENV: str({
    choices: ['production', 'staging', 'development'],
    default: 'development',
  }),
  NODE_ENV: str({
    choices: ['production', 'development'],
    default: 'development',
  }),
});

let config;
if (env.isProduction) {
  config = configs.production;
} else if (env.NODE_ENV === 'staging') {
  config = configs.staging;
} else {
  config = configs.development;
}

export default knexBuilder(config);
