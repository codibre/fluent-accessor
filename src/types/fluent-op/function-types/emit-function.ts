import { Expression } from '../../expression';
import { FluentEmitter } from '@codibre/fluent-iterable';

export interface EmitFunction {
  /**
   * Converts the iterable into an EventEmitter. This is a resolving operation.
   *
   * This EventEmitter may emit three different events:
   *
   *
   * * data: Expression<Iterable<T>, for each item of the iterable>;
   * * error: Expression<Iterable<T>, in case an error occurs. Notice that, if this method is not listened, the error will be thrown as unhandled>;
   * * end: when the iterable ends. Notice that, if the iterable is infinite, this event will never be emitted.
   */
  <T>(): Expression<Iterable<T>, FluentEmitter<T>>;
}

export interface AsyncEmitFunction extends EmitFunction {}
