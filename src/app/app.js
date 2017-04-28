/* @flow */
import envalid, { num } from 'envalid';
import App from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import logger from 'koa-pino-logger';
import pino from 'pino';

import router from './router';

const env = envalid.cleanEnv(process.env, {
  PORT: num({ default: 8080 }),
});
const log = pino();
const app = new App();

app.use(logger());
app.use(compress());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default function (): void {
  const server = app.listen(env.PORT);
  server.on('listening', () => {
    const { address, port } = server.address();
    log.info(`jtl-jobs listening on [${address}]:${port}`);
  });
}
