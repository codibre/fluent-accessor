import { expect } from 'chai';
import { $, applyFallback } from '../src';

describe(applyFallback.name, () => {
  it('should apply the given fallback', () => {
    const a: any = {
      b: {
        c: {
          d: 1,
        },
      },
    };
    const callback = $<any>().a.b.c.e.f;

    const applyResult = applyFallback(callback, 123);
    const result = callback(a);

    expect(applyResult).to.be.eq(callback);
    expect(result).to.be.eq(123);
  });
});
