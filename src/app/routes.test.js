// @flow
import { checkHealth } from './routes';

test('should respond \'200 - OK\' to GET /', () => {
  // normally checkHealth is passed a koa context
  const ctx = { response: { status: null } };
  checkHealth(ctx);

  expect(ctx.response.status).toBe(200);
});
