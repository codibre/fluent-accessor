import { AsyncExpression, Expression } from '../../expression';
import { AsyncMapper, Mapper } from 'augmentative-iterable';

export interface AvgFunction {
  /**
   * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).avg()` returns *4*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The average of the projected elements of the iterable.
   */
  <T>(mapper?: Mapper<T, number>): Expression<Iterable<T>, number>;

  /**
   * Calculates the average of the elements of the iterable projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.<br>
   *   Examples:<br>
   *     * `fluent([5, -2, 9]).avg()` returns *4*
   *     * `fluent(['anchor', 'almond', 'bound', 'alpine']).avg(word => word.length)` returns *5.75*, the average of the length of all the words in the iterable
   * @param mapper The function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns The average of the projected elements of the iterable.
   */
  <T>(mapper: keyof T): Expression<Iterable<T>, number>;
}
export interface AsyncAvgFunction {
  /**
   * Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the average of the projected elements of the iterable.
   */
  <T>(mapper?: AsyncMapper<T, number>): AsyncExpression<Iterable<T>, number>;

  /**
   * Calculates the average of the elements of the iterable asynchronously projected into a `number`. This is a resolving operation, will cause a full loop through all the elements of the iterable.
   * @param mapper The asynchronous function which projects the elements of the iterable into `number`s. Falls back to the identity function if omitted.
   * @returns A promise of the average of the projected elements of the iterable.
   */
  <T>(mapper: keyof T): AsyncExpression<Iterable<T>, number>;
}
