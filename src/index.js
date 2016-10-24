/* @flow */
import winston from 'winston';

winston.cli();
winston.level = (process.env.LOG_LEVEL || 'debug': string);

winston.debug('Hello World!');
process.exit(0);
