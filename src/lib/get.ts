import { getFactory } from '../internal';
import { FieldType } from '../types';

export function get<T, K1 extends keyof T = keyof T>(
  source: T,

  field1: K1,
): T[K1] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1]
>(source: T, field1: K1, field2: K2): T[K1][K2] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2]
>(source: T, field1: K1, field2: K2, field3: K3): T[K1][K2][K3] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3]
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
): T[K1][K2][K3][K4] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4]
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
): T[K1][K2][K3][K4][K5] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5]
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
): T[K1][K2][K3][K4][K5][K6] | undefined;
export function get<
  T,
  K1 extends keyof T = keyof T,
  K2 extends keyof T[K1] = keyof T[K1],
  K3 extends keyof T[K1][K2] = keyof T[K1][K2],
  K4 extends keyof T[K1][K2][K3] = keyof T[K1][K2][K3],
  K5 extends keyof T[K1][K2][K3][K4] = keyof T[K1][K2][K3][K4],
  K6 extends keyof T[K1][K2][K3][K4][K5] = keyof T[K1][K2][K3][K4][K5],
  K7 extends keyof T[K1][K2][K3][K4][K5][K6] = keyof T[K1][K2][K3][K4][K5][K6]
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
): T[K1][K2][K3][K4][K5][K6][K7] | undefined;
export function get<
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
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
): T[K1][K2][K3][K4][K5][K6][K7][K8] | undefined;
export function get<
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
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
  field9: K9,
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9] | undefined;
export function get<
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
  source: T,

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
): T[K1][K2][K3][K4][K5][K6][K7][K8][K9][K10] | undefined;
export function get<
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
  source: T,

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
): any | undefined;
export function get<T>(
  source: T,

  ...fields: FieldType[]
): unknown | undefined {
  const internalGet = getFactory(fields, false);
  return internalGet(source, undefined);
}
