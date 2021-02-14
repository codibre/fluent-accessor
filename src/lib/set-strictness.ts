import { strictCheck } from '../internal';
import { PropertyAccessor } from '../types';

/**
 * Defines if an accessor must strict check the fallback or not.
 * Set to true if you want the accessor to throw an error when the path is not found and fallback is undefined
 * Se tto false if you want to always returns the fallback, even when it is undefined
 * @param accessor The acessor to have the strictness changed
 * @param strict the new value for strictness: true or false
 */
export function setStrictness<T, R>(
  accessor: PropertyAccessor<T, R>,
  strict: boolean,
) {
  (accessor as any)[strictCheck] = strict;
}
