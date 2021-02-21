import { Equality, FluentIterable } from '@codibre/fluent-iterable/dist/types';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface PartitionFunction {
  /**
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentAsyncIterable]] of partitions.
   */
  <T>(criteria: number | Equality<T>): Expression<
    Iterable<T>,
    FluentIterable<FluentIterable<T>>
  >;
}

export interface AsyncPartitionFunction {
  /**
   * Groups the elements of the iterable into partitions of a specified size.<br>
   *   Note: the last partition size can be smaller than the specified size.
   * @param criteria The expected size of the partitions or a equality to determine of two consecutive items must be in the same partition.
   * @returns The [[FluentAsyncIterable]] of partitions.
   */
  <T>(criteria: number | Equality<T>): Expression<
    Iterable<T>,
    AsyncFluentOp<AsyncFluentOp<T>>
  >;
}
