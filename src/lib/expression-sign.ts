import { Expression } from '../types/expression';
import { get } from '../internal';
import { FieldType } from '../types';
import { getProxy } from '../internal/get-proxy';

export function $<T>(): Expression<T>;
export function $<T, K1 extends keyof T = keyof T>(
  field1: K1,
): Expression<T, T[K1]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1]
>(field1: K1, field2: K2): Expression<T, T[K1][K2]>;
export function $<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2]
>(field1: K1, field2: K2, field3: K3): Expression<T, T[K1][K2][K3]>;
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
): Expression<T, T[K1][K2][K3][K4]>;
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
): Expression<T, T[K1][K2][K3][K4][K5]>;
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
): Expression<T, T[K1][K2][K3][K4][K5][K6]>;
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
): Expression<T, T[K1][K2][K3][K4][K5][K6][K7]>;
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
): Expression<T, T[K1][K2][K3][K4][K5][K6][K7][K8]>;
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
): Expression<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9]>;
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
): Expression<T, T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10]>;
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
): Expression<T, any>;
export function $<T, K extends keyof T>(
  ...fields: FieldType[]
): Expression<T, T[K]> {
  return getProxy<T, K>(fields, get(fields));
}
