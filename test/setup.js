import winston from 'winston';

winston.cli();
winston.level = process.env.LOG_LEVEL || 'warn';
