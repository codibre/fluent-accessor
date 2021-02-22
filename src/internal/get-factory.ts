import {
  FieldType,
  first,
  last,
  PropertyAccessor,
  PropertyMapper,
} from '../types';
import { none } from '../lib/none';
import { fallback } from './fallback';
import { fluent } from '@codibre/fluent-iterable';

export const strictCheck = Symbol('strictCheck');

function resolve(
  prop: FieldType,
  wrapper: { result: any },
): prop is PropertyMapper<any, any> {
  if (typeof prop === 'function') {
    wrapper.result = prop(wrapper.result);
  } else if (prop === first) {
    wrapper.result = Array.isArray(wrapper.result)
      ? wrapper.result[0]
      : fluent(wrapper.result).first();
  } else if (prop === last) {
    wrapper.result = Array.isArray(wrapper.result)
      ? wrapper.result[wrapper.result.length - 1]
      : fluent(wrapper.result).last();
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
