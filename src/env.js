import envalid, { num, str } from 'envalid';

const env = envalid.cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'info' }),
  NODE_ENV:  str({
    choices: [
      'production',
      'staging',
      'development',
      'test',
    ],
    default: 'development',
  }),
  PORT: num({ default: 8080 }),
});

export default env;
