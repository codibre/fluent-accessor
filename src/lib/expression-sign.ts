import { Expression } from '../types/expression';
import { getFactory } from '../internal';
import { FieldType } from '../types';
import { getProxy } from '../internal/get-proxy';
import {
  V,
  V10,
  V2,
  V3,
  V4,
  V5,
  V6,
  V7,
  V8,
  V9,
  K,
} from '../types/chained-mappers';

export function $<T>(): Expression<T, T>;
export function $<T, K1 extends K<T>>(
  field1: K1,
): Expression<T, number>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
>(field1: K1, field2: K2): Expression<T, V2<T, K1, K2>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>> = K<V2<T, K1, K2>>
>(field1: K1, field2: K2, field3: K3): Expression<T, V3<T, K1, K2, K3>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>> = K<V3<T, K1, K2, K3>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
): Expression<T, V4<T, K1, K2, K3, K4>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>> = K<V4<T, K1, K2, K3, K4>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
): Expression<T, V5<T, K1, K2, K3, K4, K5>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>> = K<V5<T, K1, K2, K3, K4, K5>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
): Expression<T, V6<T, K1, K2, K3, K4, K5, K6>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
): Expression<T, V7<T, K1, K2, K3, K4, K5, K6, K7>>;
export function $<
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
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
): Expression<T, V8<T, K1, K2, K3, K4, K5, K6, K7, K8>>;
export function $<
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
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
  field9: K9,
): Expression<T, V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>;
export function $<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>> ,
  K9 extends K<V8<T, K1, K2, K3, K4, K5, K6, K7, K8>> ,
  K10 extends K<V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>
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
): Expression<T, V10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>>;
export function $<
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
export function $<T>(...fields: FieldType[]): Expression<T, unknown> {
  return getProxy(fields, getFactory(fields));
}
