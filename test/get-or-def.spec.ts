import { expect } from 'chai';
import { getOrDef } from '../src';

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

describe(getOrDef.name, () => {
  it('should return fallback when it i informed and the path is not found', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };

    const result = getOrDef(something, 'error', 'cd', '0', 'a', 'c');

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
    const result = getOrDef(something, 'error', 'cd', '0', 'a', 'c');

    expect(result).to.be.eq(7);
  });

  it('should return the default value of the item when the last part of the path is undefined', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [
        {
          a: {
            c: undefined as any,
          },
          b: 1,
        },
      ],
    };
    const result = getOrDef(something, 'error', 'cd', '0', 'a', 'c');

    expect(result).to.be.eq('error');
  });
});
