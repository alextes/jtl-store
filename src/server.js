/* @flow */
import envalid, { num } from 'envalid';
import App from 'koa';
import compress from 'koa-compress';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import router from './router';

const env = envalid.cleanEnv(process.env, {
  PORT: num({ default: 8080 }),
});
const app = new App();
app.use(logger());
app.use(compress());
app.use(bodyParser());

app.use(router.routes());
app.use(router.allowedMethods());

export default function (): void {
  app.listen(env.PORT);
}
