import { FieldType } from './field-type';
import { mapTo } from './map-to';
import { PropertyAccessor } from './property-accessor';
import { jsonPathSymbol } from './symbols';

export type ExtenderExpression<Input, Output = Input> = {
  [key in keyof Output]: ExtenderExpression<Input, Output[key]>;
} &
  PropertyAccessor<Input, Output> & {
    [jsonPathSymbol](): FieldType[];
    [mapTo]<T>(mapper: (a: Output) => T): ExtenderExpression<Input, T>;
  };

export interface BaseExpression<Input, Output = Input>
  extends PropertyAccessor<Input, Output> {
  jsonPath(): FieldType[];
  [jsonPathSymbol](): FieldType[];
  extend(): ExtenderExpression<Input, Output>;
}

export type Expression<Input, Output = Input> =
  | BaseExpression<Input, Output>
  | ExtenderExpression<Input, Output>;
