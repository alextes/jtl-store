import pino from 'pino';
import env from './env';

function computeLogLevel() {
  if (({}).hasOwnProperty.call(env, 'LOG_LEVEL')) {
    return env.LOG_LEVEL;
  }
  if (
    ({}).hasOwnProperty.call(env, 'NODE_ENV')
    && env.NODE_ENV === 'development'
  ) {
    return 'debug';
  }
  return 'info';
}

const log = pino({ level: computeLogLevel() });

export default log;
