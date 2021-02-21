import { AsyncExpression, Expression } from '../../expression';
import { AsyncMapper } from 'augmentative-iterable';

export interface WaitAllFunction {
  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  <T, R>(mapper: AsyncMapper<T, R>): AsyncExpression<Iterable<T>, R[]>;

  /**
   * Applies a async transformation for every element in the array and, then, wait for they conclusion with Promise.all. This is a resolving operation.
   * @param mapper The asynchronous function which projects the elements of the iterable into promises.
   * @returns a promises that resolves into an array with the result of all mappings.
   */
  <T, R extends keyof T>(mapper: R): AsyncExpression<Iterable<T>, T[R][]>;
}

export interface AsyncWaitAllFunction extends WaitAllFunction {}
