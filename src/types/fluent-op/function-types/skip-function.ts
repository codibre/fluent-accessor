import { FluentIterable } from '@codibre/fluent-iterable';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface SkipFunction {
  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.
   * @param n The number of elements to skip.
   * @returns A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
   */
  <T>(n: number): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncSkipFunction {
  /**
   * Bypasses a specified number of elements in the iterable and then returns the remaining elements.
   * @param n The number of elements to skip.
   * @returns A [[FluentAsyncIterable]] of all the elements after the first `n` elements.
   */
  <T>(n: number): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
