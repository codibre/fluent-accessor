import { Extender, FieldType, PropertyAccessor } from '../types';

export type ProxyProvider = <T, K extends keyof T>(
  fields: Iterable<FieldType>,
  accessor: PropertyAccessor<unknown, unknown>,
) => Extender<T, T[K]>;
