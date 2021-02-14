import { FieldType, PropertyAccessor } from '../types';
import { none } from '../lib/none';

export function getFactory<Input = any, Output = any>(
  target: Iterable<FieldType>,
): PropertyAccessor<Input, Output> {
  return (x: any, fallback: any) => {
    let result = x;
    if (fallback === none) {
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
      for (const prop of target) {
        if (result.hasOwnProperty(prop)) {
          result = result[prop];
        } else {
          return fallback;
        }
      }
      if (result === undefined) {
        return fallback;
      }
    }
    return result;
  };
}
