import { fallback } from '../internal/fallback';
import { Expression } from '../types';
import { setStrictness } from './set-strictness';

/**
 * Applies the given fallback for the Expression
 * @param func The expression you to apply the fallback
 * @param fallbackValue the fallback
 */
export function applyFallback<T, R, F>(
  func: Expression<T, R>,
  fallbackValue: F,
) {
  setStrictness(func, false);
  (func as any)[fallback] = fallbackValue;
}
