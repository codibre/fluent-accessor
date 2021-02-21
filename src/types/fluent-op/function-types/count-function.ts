import { AsyncExpression, Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';

export interface CountFunction {
  /**
   * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count()` returns **4**<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).count(word => word[0] === 'a')` returns **3**
   * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
   * @returns The number of elements matching the specified predicate.
   */
  <T>(predicate?: Predicate<T>): Expression<Iterable<T>, number>;
  /**
   * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
   * @returns The number of elements matching the specified predicate.
   */
  <T, R extends keyof T>(predicate: R): Expression<Iterable<T>, number>;
}
export interface AsyncCountFunction {
  /**
   * Returns the number of elements that matches an asynchronous predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The count will consider elements which match this asynchronous predicate.
   * @returns A promise of the number of elements matching the specified predicate.
   */
  <T>(predicate?: AsyncPredicate<T>): AsyncExpression<Iterable<T>, number>;
  /**
   * Returns the number of elements that matches a predicate in the iterable. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param predicate The count will consider elements which match this predicate. Defaults to the always true function and thus, counts all the elements in the iterable if omitted.
   * @returns A promise of the number of elements matching the specified predicate.
   */
  <T, R extends keyof T>(predicate: R): AsyncExpression<Iterable<T>, number>;
}
