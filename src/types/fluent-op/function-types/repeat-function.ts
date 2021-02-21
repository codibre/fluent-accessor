import { FluentIterable } from '@codibre/fluent-iterable';
import { Expression } from '../../expression';
import { FluentOp, AsyncFluentOp } from '../base';

export interface RepeatFunction {
  /**
   * Repeats the elements of the iterable a specified amount of times.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentAsyncIterable]] of the repeated iterable.
   */
  <T>(n: number): Expression<Iterable<T>, FluentIterable<T>>;
}

export interface AsyncRepeatFunction {
  /**
   * Repeats the elements of the iterable a specified amount of times.
   * @param n The amount of times the iterable is to be repeated.
   * @returns The [[FluentAsyncIterable]] of the repeated iterable.
   */
  <T>(n: number): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
