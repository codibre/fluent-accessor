import { AsyncExpression, Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';

export interface AllFunction {
  /**
   * Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
   *     * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`
   * @param predicate The condition checked for all elements in the iterable.
   * @returns `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  <T>(predicate: Predicate<T>): Expression<Iterable<T>, boolean>;
  /**
   * Determines whether all elements of the iterable satisfy a condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.<br>
   *   Examples:<br>
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word.length > 3)` yields `true` since all words are longer than 3 characters
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).all(word => word[0] === 'a')` yields `false` since *bound* does not start with the character *a*
   *     * `fluent([]).all(word => false)` yields `true` as a convention, empty iterables always return `true`
   * @param predicate The condition checked for all elements in the iterable.
   * @returns `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  <T>(predicate: keyof T): Expression<Iterable<T>, boolean>;
}
export interface AsyncAllFunction {
  /**
   * Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for all elements in the iterable.
   * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  <T>(predicate?: AsyncPredicate<T>): AsyncExpression<Iterable<T>, boolean>;

  /**
   * Determines whether all elements of the iterable satisfy an asynchronous condition. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.<br>
   *   Note: This operation stops reading elements from the iterable as soon as the result can be determined.
   * @param predicate The asynchronous condition checked for all elements in the iterable.
   * @returns A promise of `true` if all elements in the iterable satisfy the specified condition, `false` otherwise.
   */
  <T>(predicate: keyof T): AsyncExpression<Iterable<T>, boolean>;
}
