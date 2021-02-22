import { getFactory } from '../internal';
import { FieldType, K, V, V10, V2, V3, V4, V5, V6, V7, V8, V9 } from '../types';

export function get<T, K1 extends K<T>>(
  source: T,

  field1: K1,
): V<T, K1> | undefined;
export function get<T, K1 extends K<T>, K2 extends K<V<T, K1>>>(
  source: T,
  field1: K1,
  field2: K2,
): V2<T, K1, K2> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>
>(source: T, field1: K1, field2: K2, field3: K3): V3<T, K1, K2, K3> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
): V4<T, K1, K2, K3, K4> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
): V5<T, K1, K2, K3, K4, K5> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
): V6<T, K1, K2, K3, K4, K5, K6> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>
>(
  source: T,

  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
): V7<T, K1, K2, K3, K4, K5, K6, K7> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>>
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
): V8<T, K1, K2, K3, K4, K5, K6, K7, K8> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>>,
  K9 extends K<V8<T, K1, K2, K3, K4, K5, K6, K7, K8>>
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
): V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>>,
  K9 extends K<V8<T, K1, K2, K3, K4, K5, K6, K7, K8>>,
  K10 extends K<V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>
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
): V10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10> | undefined;
export function get<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>>,
  K9 extends K<V8<T, K1, K2, K3, K4, K5, K6, K7, K8>>,
  K10 extends K<V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>
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
