import { Expression, jsonPathSymbol } from '../types';

/**
 * Returns an iterable with the json path for the informed expression
 * @param a the expression to be analyzed
 * @returns an iterable with the json path for the informed expression
 */
export function jsonPath<T, R>(a: Expression<T, R>) {
  return a[jsonPathSymbol]();
}
