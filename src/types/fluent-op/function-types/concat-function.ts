import { Expression } from '../../expression';
import { AnyIterable } from 'augmentative-iterable';
import { FluentOp, AsyncFluentOp } from '../base';
import { FluentIterable } from '@codibre/fluent-iterable';

export interface ConcatFunction {
  /**
   * Concatenates specified iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], ['book'])` yields *anchor*, *almond*, *bound*, *alpine* and *book*.
   * @param iterables The iterables to concatenate.
   * @returns The [[FluentIterable]] of the concatenated iterables.
   */
  <T>(...iterables: Array<Iterable<T>>): Expression<
    Iterable<T>,
    FluentIterable<T>
  >;
}
export interface AsyncConcatFunction {
  /**
   * Concatenates specified async iterables to the iterable.<br>
   *   Example: `fluent(['anchor', 'almond']).concat(['bound', 'alpine'], someStream)` yields *anchor*, *almond*, *bound*, *alpine* and the elements of the stream.
   * @param iterables The async iterables to concatenate.
   * @returns The [[FluentAsyncIterable]] of the concatenated async iterables.
   */
  <T>(...iterables: Array<AnyIterable<T>>): Expression<
    Iterable<T>,
    AsyncFluentOp<T>
  >;
}
