import { Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { FluentOp, AsyncFluentOp } from '../base';
import { FluentIterable } from '@codibre/fluent-iterable';

export interface TakeWhileFunction {
  /**
   * Returns elements from the iterable as long as a specified condition is met.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements until the condition is met.
   */
  <T>(condition: Predicate<T>): Expression<Iterable<T>, FluentIterable<T>>;
  /**
   * Returns elements from the iterable as long as a specified condition is met.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).takeWhile(word => word[0] === 'a')` yields *anchor* and *almond*.
   * @param condition A predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentIterable]] of the elements until the condition is met.
   */
  <T>(condition: keyof T): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncTakeWhileFunction {
  /**
   * Returns elements from the iterable as long as a specified asynchronous condition is met.
   * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  <T>(condition: AsyncPredicate<T>): Expression<Iterable<T>, AsyncFluentOp<T>>;
  /**
   * Returns elements from the iterable as long as a specified asynchronous condition is met.
   * @param condition An asynchronous predicate of `T`. All elements are yielded from the iterable until this evaluates to `false` for the first time.
   * @returns A [[FluentAsyncIterable]] of the elements until the condition is met.
   */
  <T>(condition: keyof T): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
