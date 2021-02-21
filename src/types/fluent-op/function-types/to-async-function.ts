import { Expression } from '../../expression';
import { AsyncFluentOp } from '../base';

export interface ToAsyncFunction {
  /**
   * Translates the iterable into a [[FluentAsyncIterable]].
   * @returns The [[FluentAsyncIterable]] instance.
   */
  <T>(): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
