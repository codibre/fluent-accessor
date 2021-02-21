import { OrderAssurable } from './assure-order-types';

/**
 * Represents an iterable extended with common processing and mutating capabilities.<br>
 *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
 * @typeparam T The type of the items in the iterable.
 */
export interface FluentOp {}

/**
 * Represents an asynchronous iterable extended with common processing and mutating capabilities.<br>
 *   The capabilities introduced are defined as a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface) and thus they support *method chaining*.
 * @typeparam T The type of the items in the asynchronous iterable.
 */
export interface AsyncFluentOp<T>
  extends AsyncIterable<T>,
    OrderAssurable<AsyncFluentOp<T>> {}
