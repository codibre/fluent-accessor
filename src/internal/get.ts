import { FieldType, PropertyAccessor } from '../types';

const none = Symbol('none');

export function get<Input = any, Output = any>(
  target: Iterable<FieldType>,
): PropertyAccessor<Input, Output> {
  return (x: any, fallback: any = none) => {
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
    }
    return result;
  };
}
