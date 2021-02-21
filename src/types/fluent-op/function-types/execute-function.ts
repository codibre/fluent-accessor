import { Expression } from '../../expression';
import { Action, AsyncAction, FluentIterable } from '@codibre/fluent-iterable';
import { FluentOp, AsyncFluentOp } from '../base';

export interface ExecuteFunction {
  /**
   * Translate an iterable into one which executes an action against each element before yield them.<br>
   *   Examples:<br>
   *     * `for (const element of fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log)) { }` prints *anchor*, *almond*, *bound* and *alpine*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).execute(console.log).first()` prints *anchor* and returns the string *anchor*
   * @param action The action to execute against each element.
   * @returns The [[FluentIterable]] with the action injected to it.
   */
  <T>(action: Action<T>): Expression<Iterable<T>, FluentIterable<T>>;
}
export interface AsyncExecuteFunction {
  /**
   * Translate an iterable into one which executes an asynchronous action against each element before yield them.
   * @param action The asynchronous action to execute against each element.
   * @returns The [[FluentAsyncIterable]] with the action injected to it.
   */
  <T>(action: AsyncAction<T>): Expression<Iterable<T>, AsyncFluentOp<T>>;
}
