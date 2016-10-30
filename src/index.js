/* @flow */
import envalid, { str } from 'envalid';
import winston from 'winston';

import startListening from './server';

const env = envalid.cleanEnv(process.env, {
  LOG_LEVEL: str({ default: 'info' }),
});

winston.cli();
winston.level = env.LOG_LEVEL;

startListening();

