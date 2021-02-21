import { FieldType, PropertyAccessor } from '../types';
import { none } from '../lib/none';
import { fallback } from './fallback';

export const strictCheck = Symbol('strictCheck');

export function getFactory<Input = any, Output = any>(
  target: Iterable<FieldType>,
  strict = true,
): PropertyAccessor<Input, Output> {
  const callback = (x: any, fallbackValue: any) => {
    let result = x;
    if (
      (fallbackValue === undefined && (callback as any)[strictCheck]) ||
      fallbackValue === none
    ) {
      const path: FieldType[] = [];
      for (const prop of target) {
        if (typeof prop === 'function') {
          result = prop(result);
        } else {
          try {
            result = result[prop];
          } catch {
            throw new TypeError(
              `Property doesn't exists or is undefined: ${path.join('.')}`,
            );
          }
        }
        path.push(prop);
      }
    } else {
      if (fallbackValue === undefined) {
        fallbackValue = (callback as any)[fallback];
      }
      for (const prop of target) {
        if (typeof prop === 'function') {
          result = prop(result);
        } else if (result.hasOwnProperty(prop)) {
          result = result[prop];
        } else {
          return fallbackValue;
        }
      }
      if (result === undefined) {
        return fallbackValue;
      }
    }
    return result;
  };
  (callback as any)[strictCheck] = strict;

  return callback;
}
