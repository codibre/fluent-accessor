import { PropertyMapper } from './property-mapper';

export type O<T> = T extends keyof (infer R) ? R : never;

export type K<T> = keyof T | PropertyMapper<T, any>;
export type V<T, K1 extends K<T>> = K1 extends PropertyMapper<T, infer R>
  ? R
  : K1 extends keyof T
  ? T[K1]
  : never;
export type V2<T, K1 extends K<T>, K2 extends K<V<T, K1>>> = V<V<T, K1>, K2>;
export type V3<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>
> = V<V2<T, K1, K2>, K3>;
export type V4<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>
> = V<V3<T, K1, K2, K3>, K4>;
export type V5<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>
> = V<V4<T, K1, K2, K3, K4>, K5>;
export type V6<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>
> = V<V5<T, K1, K2, K3, K4, K5>, K6>;
export type V7<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>
> = V<V6<T, K1, K2, K3, K4, K5, K6>, K7>;
export type V8<
  T,
  K1 extends K<T>,
  K2 extends K<V<T, K1>>,
  K3 extends K<V2<T, K1, K2>>,
  K4 extends K<V3<T, K1, K2, K3>>,
  K5 extends K<V4<T, K1, K2, K3, K4>>,
  K6 extends K<V5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<V6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<V7<T, K1, K2, K3, K4, K5, K6, K7>>
> = V<V7<T, K1, K2, K3, K4, K5, K6, K7>, K8>;
export type V9<
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
> = V<V8<T, K1, K2, K3, K4, K5, K6, K7, K8>, K9>;
export type V10<
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
> = V<V9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>, K10>;
