/* @flow */
import { camelCase, mapKeys } from 'lodash';

export default function (obj: Object): Object {
  return mapKeys(obj, (value, key) => camelCase(key));
}
