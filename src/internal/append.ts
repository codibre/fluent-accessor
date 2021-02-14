import { FieldType } from '../types';

export function append(
  a: Iterable<FieldType>,
  b: FieldType,
): Iterable<FieldType> {
  const iterator = a[Symbol.iterator]();
  let done = false;
  return {
    [Symbol.iterator]() {
      return {
        next() {
          if (done) {
            return { done: true } as IteratorResult<FieldType>;
          }
          const result = iterator.next();
          if (result.done) {
            done = true;
            return {
              value: b,
            };
          }
          return result;
        },
      };
    },
  };
}
