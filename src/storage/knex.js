import knexBuilder from 'knex';
import env from '../env';
import configs from '../../knexfile';

let config;
if (env.NODE_ENV === 'production') {
  config = configs.production;
} else if (env.NODE_ENV === 'staging') {
  config = configs.staging;
} else if (env.NODE_ENV === 'test') {
  config = configs.test;
} else {
  config = configs.development;
}

export default knexBuilder(config);
