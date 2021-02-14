import { Expression } from '../types';

/**
 * Returns a accessor function with a fallback value
 * @param expression the base accessor expression
 * @param fallback the fallback value in case of some property in the expression path does not exist
 * @returns An accessor function with an applied fallback
 */
export function applyFallback<A, B, C>(
  expression: Expression<A, B>,
  fallback: C,
): (a: A) => B | C {
  return (a) => expression(a, fallback);
}
