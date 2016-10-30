/* @flow */
import Router from 'koa-router';

const router = new Router();
router.get('/', (ctx) => {
  const response = ctx.response;
  response.status = 200;
});

export default router;
