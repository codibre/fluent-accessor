import { AsyncExpression, Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';

export interface FirstFunction {
  /**
   * Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
   *     * `fluent([]).first()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`
   * @param predicate The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.
   * @returns The first element matching the specified predicate, or `undefined` if no such element found.
   */
  <T>(predicate?: Predicate<T>): Expression<Iterable<T>, T | undefined>;
  /**
   * Returns the first element of the iterable matching a predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first()` returns *anchor*<br>
   *     * `fluent([]).first()` returns `undefined`<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'b')` returns *bound*<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).first(word => word[0] === 'c')` returns `undefined`
   * @param predicate The first element is to be returned which matches this predicate. Defaults to the always true function and thus, returns the first element in the iterable if omitted.
   * @returns The first element matching the specified predicate, or `undefined` if no such element found.
   */
  <T>(predicate: keyof T): Expression<Iterable<T>, T | undefined>;
}
export interface AsyncFirstFunction {
  /**
   * Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The first element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
   */
  <T>(predicate?: AsyncPredicate<T>): AsyncExpression<
    Iterable<T>,
    T | undefined
  >;

  /**
   * Returns the first element of the iterable matching an asynchronous predicate, or `undefined` value if no such element is found. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param predicate The first element is to be returned which matches this asynchronous predicate.
   * @returns A promise of the first element matching the specified predicate, or `undefined` if no such element found.
   */
  <T>(predicate: keyof T): AsyncExpression<Iterable<T>, T | undefined>;
}
