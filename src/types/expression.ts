import { FieldType } from './field-type';
import { mapTo } from './map-to';
import { AsyncPropertyAccessor, PropertyAccessor } from './property-accessor';
import { jsonPathSymbol } from './symbols';

export type Expression<Input, Output = Input> = {
  [key in keyof Output]: Expression<Input, Output[key]>;
} &
  PropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
    [mapTo]<T>(mapper: (a: Output) => T): Expression<Input, T>;
  };

export type AsyncExpression<Input, Output = Input> = {
  [key in keyof Output]: AsyncExpression<Input, Output[key]>;
} &
  AsyncPropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
    [mapTo]<T>(mapper: (a: Output) => T): AsyncExpression<Input, T>;
  };
