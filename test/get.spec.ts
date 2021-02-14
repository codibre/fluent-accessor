import { expect } from 'chai';
import { get } from '../src';

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

describe(get.name, () => {
  it('should return fallback when it i informed and the path is not found', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };

    const result = get(something, 'cd', '0', 'a', 'c');

    expect(result).to.be.undefined;
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
    const result = get(something, 'cd', '0', 'a', 'c');

    expect(result).to.be.eq(7);
  });
});
