import { FieldType } from '../types';

export function constant(target: Iterable<FieldType>): any {
  return () => target;
}
