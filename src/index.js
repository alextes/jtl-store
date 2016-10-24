/* @flow */
import winston from 'winston';

winston.cli();
const LOG_LEVEL: string = process.env.LOG_LEVEL || 'debug';
winston.level = LOG_LEVEL;

const msg: string = 'Hello World!';
winston.debug(msg);
process.exit(0);
