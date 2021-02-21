import { jsonPathSymbol } from '../types/symbols';
import { constant } from './constant';
import { FieldType, PropertyAccessor } from '../types';
import { ProxyProvider } from './proxy-provider';
import { getFactory } from './get-factory';
import { append } from './append';
import { mapTo } from '../types/map-to';

export function getHandler(
  fields: Iterable<FieldType>,
  getProxy: ProxyProvider,
): ProxyHandler<PropertyAccessor<unknown, unknown>> {
  const mountProxy = (field: FieldType) => {
    const appended = append(fields, field);
    return getProxy(appended, getFactory(appended));
  };
  return {
    get(_target, field: FieldType) {
      switch (field) {
        case jsonPathSymbol:
          return constant(fields);
        case mapTo:
          return mountProxy;
        default:
          return mountProxy(field);
      }
    },
  };
}
