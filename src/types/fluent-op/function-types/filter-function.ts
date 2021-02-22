import { Expression } from '../../expression';
import { AsyncPredicate, Predicate } from 'augmentative-iterable';
import { AsyncFluentOp } from '../base';
import { FluentIterable } from '@codibre/fluent-iterable';
import { ItemType } from '@codibre/fluent-iterable/dist/types';
import { PropertyMapper } from '../../property-mapper';

export interface FilterFunction {
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <T>(predicate: Predicate<T>): PropertyMapper<Iterable<T>, FluentIterable<T>>;
  /**
   * Filters the iterable of `T` based on a predicate.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).filter(word => word[0] === 'a')` yields *anchor*, *almond*, and *alpine*.
   * @param predicate A predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <T>(predicate: keyof T): Expression<Iterable<T>, FluentIterable<T>>;
}
export interface AsyncFilterFunction {
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <T>(predicate: AsyncPredicate<T>): Expression<Iterable<T>, AsyncFluentOp<T>>;
  /**
   * Filters the iterable of `T` based on an asynchronous predicate.
   * @param predicate An asynchronous predicate of `T`. All elements are yielded from the iterable against which this evaluates to `true`.
   * @returns A [[FluentAsyncIterable]] of the elements against which the predicate evaluates to `true`.
   */
  <T, R extends keyof T>(predicate: R): Expression<
    Iterable<T>,
    AsyncFluentOp<T>
  >;
}
