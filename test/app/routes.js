/* @flow */
import test from 'ava';
import { checkHealth } from '../src/app/routes';

test('should respond 200 - OK to GET /', async (t) => {
  const ctx = { response: { status: 500 } };
  checkHealth(ctx);

  t.is(ctx.response.status, 200);
});
