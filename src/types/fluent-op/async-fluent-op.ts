import * as f from './function-types';

declare module './base' {
  interface AsyncFluentOp<T> {
    withIndex: f.AsyncWithIndexFunction;
    takeWhile: f.AsyncTakeWhileFunction;
    take: f.TakeFunction;
    skipWhile: f.AsyncSkipWhileFunction;
    skip: f.AsyncSkipFunction;
    map: f.AsyncMapFunction;
    filter: f.AsyncFilterFunction;
    partition: f.AsyncPartitionFunction;
    append: f.AsyncAppendFunction;
    prepend: f.AsyncPrependFunction;
    concat: f.AsyncConcatFunction;
    repeat: f.AsyncRepeatFunction;
    flatten: f.AsyncFlattenFunction;
    flatMap: f.AsyncFlattenFunction;
    sort: f.AsyncSortFunction;
    sortBy: f.AsyncSortByFunction;
    distinct: f.AsyncDistinctFunction;
    isDistinct: f.AsyncIsDistinctFunction;
    group: f.AsyncGroupFunction;
    count: f.AsyncCountFunction;
    first: f.AsyncFirstFunction;
    last: f.AsyncLastFunction;
    reduceAndMap: f.AsyncReduceAndMapFunction;
    reduce: f.AsyncReduceFunction;
    all: f.AsyncAllFunction;
    every: f.AsyncAllFunction;
    any: f.AsyncAnyFunction;
    some: f.AsyncAnyFunction;
    contains: f.AsyncContainsFunction;
    toArray: f.AsyncToArrayFunction;
    toObject: f.AsyncToObjectFunction;
    forEach: f.AsyncForEachFunction;
    execute: f.AsyncExecuteFunction;
    join: f.AsyncJoinFunction;
    sum: f.AsyncSumFunction;
    avg: f.AsyncAvgFunction;
    top: f.AsyncTopFunction;
    min: f.AsyncMinFunction;
    max: f.AsyncMaxFunction;
    hasExactly: f.AsyncHasExactlyFunction;
    hasLessThan: f.AsyncHasLessThanFunction;
    hasLessOrExactly: f.AsyncHasLessOrExactly;
    hasMoreThan: f.AsyncHasMoreThanFunction;
    hasMoreOrExactly: f.AsyncHasMoreOrExactlyFunction;
    merge: f.AsyncMergeFunction;
    mergeCatching: f.AsyncMergeCatchingFunction;
    mergeEmitter: f.AsyncMergeEmitterFunction;
    mergeEmitterCatching: f.AsyncMergeEmitterCatchingFunction;
    waitAll: f.AsyncWaitAllFunction;
    combine: f.AsyncCombineFunction;
    emit: f.AsyncEmitFunction;
  }
}
