import { Expression } from '../../expression';
import EventEmitter = require('events');
import { AsyncFluentOp } from '../base';
import { FluentEmitOptions } from '@codibre/fluent-iterable/dist/types';

export interface AsyncMergeEmitterFunction {
  /**
   * Merge the iterable with the informed EventEmitter.
   *
   * **IMPORTANT**: the AsyncIterable created from the EventEmitter is always based on a key event which every
   * emission generates a new yielded result. The default key event is **'data'**.
   *
   * Also, the generated AsyncIterable will be infinite unless an ending event is emitted at some point.
   * The defaults ending events are **'end'** and **'close'**. So, it's important to have in mind this behavior
   * to use this feature properly. Operations that requires finiteness to be used may fall into an infinite loop.
   *
   * If you need to change the key event or other characteristics, you can do it through the **options** parameter
   * @param emitter The EventEmitter
   * @param options The EventEmitter options. Optional
   * @returns A new iterable that returns the elements of all others in the order of which resolves first
   */
  <T, R>(emitter: EventEmitter, options?: FluentEmitOptions): Expression<
    Iterable<T>,
    AsyncFluentOp<T | R>
  >;
}
