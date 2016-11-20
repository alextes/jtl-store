/* @flow */
import test from 'ava';
import { checkHealth } from '../../src/app/routes';

test('should respond \'200 - OK\' to GET /', async (t) => {
  // normally checkHealth is passed a koa context
  const ctx = { response: { status: null } };
  checkHealth(ctx);

  t.is(ctx.response.status, 200);
});
