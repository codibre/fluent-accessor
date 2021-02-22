import { BaseExpression, Expression, ExtenderExpression } from '../types';
import { getFactory } from '../internal';
import { FieldType } from '../types';
import { getProxy } from '../internal/get-proxy';
import { constant } from '../internal/constant';

export function $<T>(): ExtenderExpression<T>;
export function $<T, K1 extends keyof T = keyof T>(
  field1: K1,
): BaseExpression<T, T[K1]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1]
>(field1: K1, field2: K2): BaseExpression<T, T[K1][K2]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2]
>(field1: K1, field2: K2, field3: K3): BaseExpression<T, T[K1][K2][K3]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
): BaseExpression<T, T[K1][K2][K3][K4]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
): BaseExpression<T, T[K1][K2][K3][K4][K5]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
): BaseExpression<T, T[K1][K2][K3][K4][K5][K6]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
): BaseExpression<T, T[K1][K2][K3][K4][K5][K6][K7]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K2][K3][K4][K5][K6][K7]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
): BaseExpression<T, T[K1][K2][K3][K4][K5][K6][K7][K8]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K2][K3][K4][K5][K6][K7],
  K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
  field9: K9,
): BaseExpression<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K2][K3][K4][K5][K6][K7],
  K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
  K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
  field9: K9,
  field10: K10,
): BaseExpression<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6],
  K8 extends keyof T[K1][K2][K3][K4][K5][K6][K7] = keyof T[K1][K2][K3][K4][K5][K6][K7],
  K9 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8],
  K10 extends keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9] = keyof T[K1][K2][K3][K4][K5][K6][K7][K8][K9]
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
  field9: K9,
  field10: K10,
  field11: FieldType,
  ...others: FieldType[]
): BaseExpression<T, any>;
export function $<T>(...fields: FieldType[]): Expression<T, unknown> {
  const baseFunc = getFactory(fields) as BaseExpression<any, unknown>;
  const extend = () => getProxy(fields, baseFunc);
  if (fields.length === 0) {
    return extend();
  }
  baseFunc.jsonPath = constant(fields);
  baseFunc.extend = extend;
  return baseFunc;
}
