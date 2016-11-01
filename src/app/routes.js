/* @flow */

// eslint-disable-next-line import/prefer-default-export
export function checkHealth(ctx: Object): void {
  const response = ctx.response;
  response.status = 200;
}
