import { FluentIterable } from '@codibre/fluent-iterable';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface TakeFunction {
  /**
   * Returns a specified number of contiguous elements from the start of the iterable.
   * @param n The number of elements to take.
   * @returns A [[FluentAsyncIterable]] of the first `n` elements.
   */
  <T>(n: number): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncTakeFunction {
  /**
   * Returns a specified number of contiguous elements from the start of the iterable.
   * @param n The number of elements to take.
   * @returns A [[FluentAsyncIterable]] of the first `n` elements.
   */
  <T>(n: number): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
