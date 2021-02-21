import { Expression } from '../../expression';
import { AsyncFluentOp } from '../base';

export interface AsyncMergeFunction {
  <T, R>(...iterables: AsyncIterable<R>[]): Expression<
    Iterable<T>,
    AsyncFluentOp<T | R>
  >;
}
