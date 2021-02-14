import { FieldType } from './field-type';
import { PropertyAccessor } from './property-accessor';
import { jsonPathSymbol } from './symbols';

export type Expression<Input, Output = Input> = {
  [key in keyof Output]: Expression<Input, Output[key]>;
} &
  PropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
  };
