import { FluentIterable } from '@codibre/fluent-iterable';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface AppendFunction {
  /**
   * Appends a value to the end of the iterable.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  <T>(item: T): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncAppendFunction {
  /**
   * Appends a value to the end of the iterable.
   * @param item The item to be appended to the iterable.
   * @returns The [[FluentAsyncIterable]] appended with the element.
   */
  <T>(item: T): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
