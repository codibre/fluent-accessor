import { ItemType } from '@codibre/fluent-iterable/dist/types';
import { Mapper } from 'augmentative-iterable';
import { expect } from 'chai';
import { $, fluentOp, mapTo, PropertyMapper } from '../src';

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

  it('should working passing an mapper function with no fallback', () => {
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
    const path = $<Something>().cd[0].a[mapTo]((x) => {
      return x.c * 2;
    });

    const result = path(something);

    expect(result).to.be.eq(14);
  });

  it('should working passing an mapper function with fallback', () => {
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
    const path = $<Something>().cd[0].a[mapTo]((x) => {
      return x.c * 2;
    });

    const result = path(something, 'error');

    expect(result).to.be.eq(14);
  });

  it('should thrown an error when an mapper throws an error even with fallback', () => {
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
    const expectedError = new Error('It will fail, champs');
    const path = $<Something>().cd[0].a[mapTo]((): number => {
      throw expectedError;
    });
    let thrownError: any;

    try {
      path(something, 'error');
    } catch (err) {
      thrownError = err;
    }

    expect(thrownError).to.be.eq(expectedError);
  });

  it('should throw a TypeError when path does not exist and fallback is set to none', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().cd[0].a.c;
    let thrownError!: TypeError;

    try {
      path(something);
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

    const result = test($());

    expect(result).to.be.eq(7);
  });

  it('should return the value of the item in the path using array mode and mapper', () => {
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

    const result = test($('cd', '0', 'a', (x) => x.c * 2));

    expect(result).to.be.eq(14);
  });

  it('should work using a fluent operation', () => {
    const something = [1, 3, 2];

    function test<T>(f: (a: number[]) => T) {
      return f(something);
    }

    const result = test($(fluentOp.max()));

    expect(result).to.be.eq(3);
  });
});
