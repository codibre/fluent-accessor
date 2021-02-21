import { AsyncExpression, Expression } from '../../expression';
import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface MinFunction {
  /**
   * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable
   * @param mapper The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns The minimum of the iterable's projected elements.
   */
  <T, R = T>(mapper?: Mapper<T, R>): Expression<Iterable<T>, T | undefined>;
  /**
   * Finds the numeric minimum element of the iterable using a projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).min(word => word.length)` returns *bound*, the shortest word in the iterable
   * @param mapper The function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns The minimum of the iterable's projected elements.
   */
  <T, R extends keyof T>(mapper: R): Expression<Iterable<T>, T | undefined>;
}
export interface AsyncMinFunction {
  /**
   * Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns A promise of the minimum of the iterable's projected elements.
   */
  <T, R = T>(mapper?: AsyncMapper<T, R>): AsyncExpression<
    Iterable<T>,
    T | undefined
  >;
  /**
   * Finds the numeric minimum element of the iterable using an asynchronous projection. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into the comparable value. Falls back to the identity function if omitted.
   * @returns A promise of the minimum of the iterable's projected elements.
   */
  <T, R extends keyof T>(mapper: R): AsyncExpression<
    Iterable<T>,
    T | undefined
  >;
}
