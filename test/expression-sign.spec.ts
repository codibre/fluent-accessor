import { expect } from 'chai';
import { $, none } from '../src';

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

describe('$', () => {
  it('should return the value of the item in the path using fluent mode', () => {
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

    const result = path(something);

    expect(result).to.be.eq(7);
  });

  it('should return fallback when it i informed and the path is not found', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().cd[0].a.c;

    const result = path(something, 'error');

    expect(result).to.be.eq('error');
  });

  it('should throw a TypeError when path does not exist and fallback is set to none', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().cd[0].a.c;
    let thrownError!: TypeError;

    try {
      path(something, none);
    } catch (err) {
      thrownError = err;
    }

    expect(thrownError).to.be.instanceOf(TypeError);
    expect(thrownError.message).to.be.eq(
      "Property doesn't exists or is undefined: cd.0",
    );
  });

  it('should return the value of the item in the path using array mode', () => {
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
    function test<T>(f: (a: Something) => T) {
      return f(something);
    }

    const result = test($('cd', '0', 'a', 'c'));

    expect(result).to.be.eq(7);
  });
});
