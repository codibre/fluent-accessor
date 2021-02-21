import { AsyncExpression, Expression } from '../../expression';
export interface HasMoreOrExactlyFunction {
  /**
   * Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is greater or equal the threshold and false if it is not.
   */
  <T>(threshold: number): Expression<Iterable<unknown>, boolean>;
}

export interface AsyncHasMoreOrExactlyFunction {
  /**
   * Checks if the number of elements of the iterable is more or equal the threshold using a projection. This is a partial resolving operation, will cause a partial or - if needed - a full loop through the elements of the iterable.
   * @param threshold The validation threshold
   * @returns True if the number of elements of the iterable is greater or equal the threshold and false if it is not.
   */
  <T>(threshold: number): AsyncExpression<Iterable<T>, boolean>;
}
