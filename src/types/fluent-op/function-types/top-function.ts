import { AsyncExpression, Expression } from '../../expression';
import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { Comparer } from '@codibre/fluent-iterable';

export interface TopFunction {
  /**
   * Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns The top of the iterable's projected elements.
   */
  <T, R>(mapper: Mapper<T, R>, comparer: Comparer<R>): Expression<
    Iterable<T>,
    T | undefined
  >;

  /**
   * Calculates the top element of the iterable using a projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.length, (a, b) => b - a)` returns *bound*, the shortest word in the iterable
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).top(word => word.charCodeAt(0), (a, b) => a - b)` returns *bound*, latest word in the lexicographical order considering the first character only
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns The top of the iterable's projected elements.
   */
  <T, R extends keyof T>(mapper: R, comparer: Comparer<T[R]>): Expression<
    Iterable<T>,
    T | undefined
  >;
}
export interface AsyncTopFunction {
  /**
   * Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The asynchronous function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns A promise of the top of the iterable's projected elements.
   */
  <T, R>(mapper: AsyncMapper<T, R>, comparer: Comparer<R>): AsyncExpression<
    Iterable<T>,
    T | undefined
  >;

  /**
   * Calculates the top element of the iterable using an asynchronous projection and a comparer. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @typeparam R The type of the projected elements used for comparison.
   * @param mapper The asynchronous function which projects the elements of the iterable into comparable.
   * @param comparer The comparison function.
   * @returns A promise of the top of the iterable's projected elements.
   */
  <T, R extends keyof T>(mapper: T, comparer: Comparer<T[R]>): Promise<
    T | undefined
  >;
}
