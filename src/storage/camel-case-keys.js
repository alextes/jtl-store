// @flow
import { camelCase, mapKeys } from 'lodash';

export default function (job): Object {
  return mapKeys(job, (value, key) => camelCase(key));
}
