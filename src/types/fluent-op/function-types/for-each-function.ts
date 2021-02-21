import { AsyncExpression, Expression } from '../../expression';
import { Action, AsyncAction } from '@codibre/fluent-iterable';

export interface ForEachFunction {
  /**
   * Iterates through the iterable and executes an action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Example: `fluent(['anchor', 'almond', 'bound', 'alpine']).forEach(console.log)` prints *anchor*, *almond*, *bound* and *alpine*
   * @param action The action to execute against each element.
   */
  <T>(action: Action<T>): Expression<Iterable<T>, void>;
}
export interface AsyncForEachFunction {
  /**
   * Iterates through the iterable and executes an asynchronous action against each element. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param action The asynchronous action to execute against each element.
   * @returns A promise of the executions.
   */
  <T>(mapper: AsyncAction<T>): AsyncExpression<Iterable<T>, void>;
}
