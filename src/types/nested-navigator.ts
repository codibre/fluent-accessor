import { K, V, V10, V2, V3, V4, V5, V6, V7, V8, V9 } from './chained-mappers';
import { BaseExpression } from './expression';
import { FieldType } from './field-type';

export interface NestedNavigator {
  <T>(): BaseExpression<T, T>;
  <T, K1 extends K<T>>(field1: K1): BaseExpression<T, number>;
  <T, K1 extends K<T>, K2 extends K<V<T, K1>>>(
    field1: K1,
    field2: K2,
  ): BaseExpression<T, V2<T, K1, K2>>;
  <
    T,
    K1 extends K<T>,
    K2 extends K<V<T, K1>>,
    K3 extends K<V2<T, K1, K2>> = K<V2<T, K1, K2>>
  >(
    field1: K1,
    field2: K2,
    field3: K3,
  ): BaseExpression<T, V3<T, K1, K2, K3>>;
  <
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
  ): BaseExpression<T, V4<T, K1, K2, K3, K4>>;
  <
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
  ): BaseExpression<T, V5<T, K1, K2, K3, K4, K5>>;
  <
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
  ): BaseExpression<T, V6<T, K1, K2, K3, K4, K5, K6>>;
  <
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
  ): BaseExpression<T, V7<T, K1, K2, K3, K4, K5, K6, K7>>;
  <
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
  ): BaseExpression<T, V8<T, K1, K2, K3, K4, K5, K6, K7, K8>>;
  <
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
  ): BaseExpression<T, V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>;
  <
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
  ): BaseExpression<T, V10<T, K1, K2, K3, K4, K5, K6, K7, K8, K9, K10>>;
  <
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
  ): BaseExpression<T, any>;
}
