import { ItemType } from '@codibre/fluent-iterable/dist/types';

function test<T>(f: (a: number[]) => T) {
  return f([1, 2, 3]);
}

function callbackProvider<T extends ItemType<T>[]>(): (a: T) => ItemType<T> {
  return (a: T) => a[0];
}

const result = test(callbackProvider()); // result type is unknown
