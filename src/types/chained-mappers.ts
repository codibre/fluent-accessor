import { Mapper } from './mapper';

export type K<T> = keyof T | Mapper<T>;
export type A<T, K1 extends K<T>> = K1 extends Mapper<T, infer R>
  ? R
  : K1 extends keyof T
  ? T[K1]
  : never;
export type A2<T, K1 extends K<T>, K2 extends K<A<T, K1>>> = A<A<T, K1>, K2>;
export type A3<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>
> = A<A2<T, K1, K2>, K3>;
export type A4<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>
> = A<A3<T, K1, K2, K3>, K4>;
export type A5<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>
> = A<A4<T, K1, K2, K3, K4>, K5>;
export type A6<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>>
> = A<A5<T, K1, K2, K3, K4, K5>, K6>;
export type A7<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>>
> = A<A6<T, K1, K2, K3, K4, K5, K6>, K7>;
export type A8<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>>
> = A<A7<T, K1, K2, K3, K4, K5, K6, K7>, K8>;
export type A9<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>>,
  K9 extends K<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>>
> = A<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>, K9>;
export type A10<
  T,
  K1 extends K<T>,
  K2 extends K<A<T, K1>>,
  K3 extends K<A2<T, K1, K2>>,
  K4 extends K<A3<T, K1, K2, K3>>,
  K5 extends K<A4<T, K1, K2, K3, K4>>,
  K6 extends K<A5<T, K1, K2, K3, K4, K5>>,
  K7 extends K<A6<T, K1, K2, K3, K4, K5, K6>>,
  K8 extends K<A7<T, K1, K2, K3, K4, K5, K6, K7>>,
  K9 extends K<A8<T, K1, K2, K3, K4, K5, K6, K7, K8>>,
  K10 extends K<A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>>
> = A<A9<T, K1, K2, K3, K4, K5, K6, K7, K8, K9>, K10>;
