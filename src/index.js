// @flow
import envalid, { str } from 'envalid';
import pino from 'pino';

import startListening from './app/app';

const env = envalid.cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'info' }),
});

pino.level = env.LOG_LEVEL;

startListening();
