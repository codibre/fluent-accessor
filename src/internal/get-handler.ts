import { jsonPathSymbol } from '../types/symbols';
import { constant } from './constant';
import { FieldType, PropertyAccessor } from '../types';
import { ProxyProvider } from './proxy-provider';
import { getFactory } from './get-factory';
import { append } from './append';

export function getHandler(
  fields: Iterable<FieldType>,
  getProxy: ProxyProvider,
): ProxyHandler<PropertyAccessor<unknown, unknown>> {
  return {
    get(_target, field: FieldType) {
      switch (field) {
        case jsonPathSymbol:
          return constant(fields);
        default:
          const newFields = append(fields, field);
          return getProxy(newFields, getFactory(newFields));
      }
    },
  };
}
