/* @flow */
import App from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import logger from 'koa-pino-logger';
import devLogger from 'koa-logger';
import router from './router';
import env from '../env';
import log from '../log';

const app = new App();

if (env.NODE_ENV === 'development') {
  app.use(devLogger);
} else {
  app.use(logger());
}
app.use(compress());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default function (): void {
  const server = app.listen(env.PORT);
  server.on('listening', () => {
    const { address, port } = server.address();
    log.info(`jtl-store listening on [${address}]:${port}`);
  });
}
