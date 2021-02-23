import { baseOp, FieldType, PropertyAccessor } from '../types';
import { none } from '../lib/none';
import { fallback } from './fallback';

export const strictCheck = Symbol('strictCheck');

function first<T>(iterable: Iterable<T>) {
  const it = iterable[Symbol.iterator]();
  const result = it.next();
  it.return?.();
  return result.value;
}

function arrayFirst(x: Array<any>): any {
  return x[0];
}

function last<T>(iterable: Iterable<T>) {
  const it = iterable[Symbol.iterator]();
  let next = it.next();
  let value: T | undefined = undefined;
  while (!next.done) {
    value = next.value;
    next = it.next();
  }
  it.return?.();
  return value;
}

function arrayLast(x: Array<any>): any {
  return x[x.length - 1];
}

function isIterable(a: unknown): a is Iterable<any> {
  return a === '' || (!!a && typeof (a as any)[Symbol.iterator] === 'function');
}

function getIterableValue(
  value: unknown,
  arrayExtractor: (it: Array<any>) => any,
  iterableExtractor: (it: Iterable<any>) => any,
): any {
  if (Array.isArray(value)) {
    return arrayExtractor(value);
  }
  if (isIterable(value)) {
    return iterableExtractor(value);
  }
  throw new Error('value it not an Iterable!');
}

function resolve(prop: FieldType, wrapper: { result: any }): boolean {
  if (prop === baseOp.first) {
    wrapper.result = getIterableValue(wrapper.result, arrayFirst, first);
  } else if (prop === baseOp.last) {
    wrapper.result = getIterableValue(wrapper.result, arrayLast, last);
  } else {
    return false;
  }
  return true;
}

export function getFactory<Input = any, Output = any>(
  target: Iterable<FieldType>,
  strict = true,
): PropertyAccessor<Input, Output> {
  const callback = (x: any, fallbackValue: any) => {
    const wrapper = { result: x };
    if (
      (fallbackValue === undefined && (callback as any)[strictCheck]) ||
      fallbackValue === none
    ) {
      const path: FieldType[] = [];
      for (const prop of target) {
        if (!resolve(prop, wrapper)) {
          try {
            wrapper.result = wrapper.result[prop];
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
        if (!resolve(prop, wrapper)) {
          if (wrapper.result.hasOwnProperty(prop)) {
            wrapper.result = wrapper.result[prop];
          } else {
            return fallbackValue;
          }
        }
        if (wrapper.result === undefined) {
          return fallbackValue;
        }
      }
    }
    return wrapper.result;
  };
  (callback as any)[strictCheck] = strict;

  return callback;
}
