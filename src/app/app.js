/* @flow */
import envalid, { num } from 'envalid';
import App from 'koa';
import bodyParser from 'koa-bodyparser';
import compress from 'koa-compress';
import convert from 'koa-convert';
import logger from 'koa-logger';
import winston from 'winston';

import router from './router';

const env = envalid.cleanEnv(process.env, {
  PORT: num({ default: 8080 }),
});

const app = new App();

app.use(convert(logger()));
app.use(compress());
app.use(convert(bodyParser()));

app.use(router.routes());
app.use(router.allowedMethods());

export default async function (): void {
  const server = app.listen(env.PORT);
  server.on('listening', () => {
    const { address, port } = server.address();
    winston.info(`jtl-jobs listening on [${address}]:${port}`);
  });
}
