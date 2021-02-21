import { FluentOp } from '../types/fluent-op';

let fInstance: any;

function f(t: Iterable<unknown>) {
  if (!fInstance) {
    fInstance = require('@codibre/fluent-iterable');
  }
  return fInstance.fluent(t);
}

export const fluentOp = new Proxy(
  {},
  {
    get(_t, prop) {
      return (...args: any[]) => (t: Iterable<unknown>) => f(t)[prop](...args);
    },
  },
) as FluentOp;
