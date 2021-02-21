import { FluentIterable } from '@codibre/fluent-iterable';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface PrependFunction {
  /**
   * Adds a value to the beginning of the iterable.
   * @param item The item to be prepended to the iterable.
   * @returns The [[FluentAsyncIterable]] prepended with the element.
   */
  <T>(item: T): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncPrependFunction {
  /**
   * Adds a value to the beginning of the iterable.
   * @param item The item to be prepended to the iterable.
   * @returns The [[FluentAsyncIterable]] prepended with the element.
   */
  <T>(item: T): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
