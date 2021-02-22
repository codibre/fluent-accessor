import { FieldType } from './field-type';
import { mapTo } from './map-to';
import { AsyncPropertyAccessor, PropertyAccessor } from './property-accessor';
import { jsonPathSymbol } from './symbols';

export type Extender<Input, Output = Input> = {
  [key in keyof Output]: Extender<Input, Output[key]>;
} &
  PropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
    [mapTo]<T>(mapper: (a: Output) => T): Extender<Input, T>;
  };

export interface BaseExpression<Input, Output = Input>
  extends PropertyAccessor<Input, Output> {
  jsonPath(): FieldType[];
  [jsonPathSymbol](): FieldType[];
  extend(): Extender<Input, Output>;
}

export type Expression<Input, Output = Input> =
  | BaseExpression<Input, Output>
  | Extender<Input, Output>;

export type AsyncExpression<Input, Output = Input> = {
  [key in keyof Output]: AsyncExpression<Input, Output[key]>;
} &
  AsyncPropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
    [mapTo]<T>(mapper: (a: Output) => T): AsyncExpression<Input, T>;
  };
