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
      try {
        for (const prop of target) {
          result = result[prop];
          path.push(prop);
        }
      } catch {
        throw new TypeError(
          `Property doesn't exists or is undefined: ${path.join('.')}`,
        );
      }
    } else {
      if (fallbackValue === undefined) {
        fallbackValue = (callback as any)[fallback];
      }
      for (const prop of target) {
        if (result.hasOwnProperty(prop)) {
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
