import { Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentOp, AsyncFluentOp } from '../base';
import { FluentIterable } from '@codibre/fluent-iterable';

export interface SkipWhileFunction {
  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements after the condition is not met.
   */
  <T>(condition: Predicate<T>): Expression<Iterable<T>, FluentIterable<T>>;
  /**
   * Bypasses elements in the iterable as long as a specified condition is true and then returns the remaining elements.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).skipWhile(word => word[0] === 'a')` yields *bound* and *alpine*.
   * @param condition A predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements after the condition is not met.
   */
  <T>(condition: keyof T): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncSkipWhileFunction {
  /**
   * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
   * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  <T>(condition: AsyncPredicate<T>): Expression<Iterable<T>, AsyncFluentOp<T>>;

  /**
   * Bypasses elements in the iterable as long as a specified asynchronous condition is true and then returns the remaining elements.
   * @param condition An asynchronous predicate of `T`. All elements are skipped from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements after the condition is not met.
   */
  <T, R extends keyof T>(condition: R): Expression<
    Iterable<T>,
    AsyncFluentOp<T>
  >;
}
