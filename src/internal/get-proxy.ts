import { Expression } from '../types/expression';
import { FieldType, PropertyAccessor } from '../types';
import { getHandler } from './get-handler';

export function getProxy<T, K extends keyof T>(
  fields: Iterable<FieldType>,
  accessor: PropertyAccessor<unknown, unknown>,
): Expression<T, T[K]> {
  return new Proxy(accessor, getHandler(fields, getProxy)) as any;
}
