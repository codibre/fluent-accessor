import { Expression } from '../types/expression';
import { getFactory } from '../internal';
import { FieldType } from '../types';
import { getProxy } from '../internal/get-proxy';
import {
  A,
  A10,
  A2,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
  K,
} from '../types/chained-mappers';

export function $<T>(): Expression<T>;
export function $<T, K1 extends K<T> = K<T>>(
  field1: K1,
): Expression<T, A<T, K1>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>
>(field1: K1, field2: K2): Expression<T, A2<T, K1, K2>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>
>(field1: K1, field2: K2, field3: K3): Expression<T, A3<T, K1, K2, K3>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
): Expression<T, A4<T, K1, K2, K3, K4>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
): Expression<T, A5<T, K1, K2, K3, K4, K5>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
): Expression<T, A6<T, K1, K2, K3, K4, K5, K6>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>> = K<A6<T, K1, K2, K3, K4, K5, K6>>
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
): Expression<T, A7<T, K1, K2, K3, K4, K5, K6, K7>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>> = K<
    A6<T, K1, K2, K3, K4, K5, K6>
  >,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>> = K<
    A7<T, K1, K2, K3, K4, K5, K6, K7>
  >
>(
  field1: K1,
  field2: K2,
  field3: K3,
  field4: K4,
  field5: K5,
  field6: K6,
  field7: K7,
  field8: K8,
): Expression<T, A8<T, K1, K2, K3, K4, K5, K6, K7, K8>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>> = K<
    A6<T, K1, K2, K3, K4, K5, K6>
  >,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>> = K<
    A7<T, K1, K2, K3, K4, K5, K6, K7>
  >,
  K9 extends K<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>> = K<
    A8<T, K1, K2, K3, K4, K5, K6, K7, K8>
  >
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
): Expression<T, A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>> = K<
    A6<T, K1, K2, K3, K4, K5, K6>
  >,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>> = K<
    A7<T, K1, K2, K3, K4, K5, K6, K7>
  >,
  K9 extends K<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>> = K<
    A8<T, K1, K2, K3, K4, K5, K6, K7, K8>
  >,
  K10 extends K<A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>> = K<
    A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>
  >
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
): Expression<T, A10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>>;
export function $<
  T,
  K1 extends K<T> = K<T>,
  K2 extends K<A<T, K1>> = K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>> = K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>> = K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>> = K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>> = K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>> = K<
    A6<T, K1, K2, K3, K4, K5, K6>
  >,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>> = K<
    A7<T, K1, K2, K3, K4, K5, K6, K7>
  >,
  K9 extends K<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>> = K<
    A8<T, K1, K2, K3, K4, K5, K6, K7, K8>
  >,
  K10 extends K<A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>> = K<
    A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>
  >
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
