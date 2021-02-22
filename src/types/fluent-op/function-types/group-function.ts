import { Expression } from '../../expression';
import { AsyncMapper, Mapper } from 'augmentative-iterable';
import { FluentGroup } from '@codibre/fluent-iterable';
import { FluentOp, AsyncFluentOp } from '../base';
import {
  FluentIterable,
  KVGroupTransform,
} from '@codibre/fluent-iterable/dist/types';

export interface GroupFunction {
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentIterable]] of the distinct groups.
   */
  <T, R, V = T>(
    mapper: Mapper<T, R>,
    transformValue?: KVGroupTransform<R, T, V>,
  ): Expression<Iterable<T>, FluentIterable<FluentGroup<V, R>>>;
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified projection.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).group(word => word[0])` yields { key: 'a', values: ['anchor', 'almond', 'alpine'] } and { key: 'b', values: ['bound'] }.
   * @typeparam R The type of the groups' key.
   * @param mapper Projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentIterable]] of the distinct groups.
   */
  <T, R extends keyof T, V = T>(
    mapper: R,
    transformValue?: KVGroupTransform<T[R], T, V>,
  ): Expression<Iterable<T>, FluentIterable<FluentGroup<V, T[R]>>>;
}
export interface AsyncGroupFunction {
  /**
   * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
   * @typeparam R The type of the groups key.
   * @param mapper Asynchronously projects the elements of the iterable into the group key they belong to.
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  <T, R, V = T>(
    mapper: AsyncMapper<T, R>,
    transformValue?: KVGroupTransform<R, T, V>,
  ): Expression<Iterable<T>, AsyncFluentOp<FluentGroup<V, R>>>;

  /**
   * Groups the elements of the iterable keyed by equality of data at the specified asynchronous projection.
   * @typeparam R The type of the groups key.
   * @param mapper A property name with value will be used as for comparison with the grouping key
   * @param transformValue Optional. Allows a transformation before adding the value to the group. The return must be an iterable
   * @returns The [[FluentAsyncIterable]] of the distinct groups.
   */
  <T, R extends keyof T, V = T>(
    mapper: R,
    transformValue?: KVGroupTransform<T[R], T, V>,
  ): Expression<Iterable<T>, AsyncFluentOp<FluentGroup<V, T[R]>>>;
}
