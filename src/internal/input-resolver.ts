import { FieldType, PropertyAccessor } from '../types';

export type InputResolver = (
  target: FieldType[],
) => PropertyAccessor<unknown, unknown>;

export type FieldedInputResolver = InputResolver & {
  fields: FieldType[];
};
