import { PropertyMapper } from './property-mapper';

export type FieldType<R = unknown> =
  | string
  | number
  | symbol
  | PropertyMapper<unknown, R>;
