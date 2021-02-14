import { expect } from 'chai';
import { $, applyFallback } from '../src';

interface Something {
  ab: string;
  cd: [
    {
      a: {
        c: number;
      };
      b: number;
    },
  ];
}

describe(applyFallback.name, () => {
  it('should return fallback when it i informed and the path is not found', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<typeof something>().cd[0].a.c;
    const func = applyFallback(path, 'error');

    const result = func(something);

    expect(result).to.be.eq('error');
  });

  it('should return the value of the item when the path exists', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [
        {
          a: {
            c: 7,
          },
          b: 1,
        },
      ],
    };
    const path = $<Something>().cd[0].a.c;
    const func = applyFallback(path, 'error');

    const result = func(something);

    expect(result).to.be.eq(7);
  });
});
