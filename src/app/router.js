// @flow
import Router from 'koa-router';
import * as routes from './routes';

const router = new Router();

router.get('/', routes.checkHealth);

export default router;
