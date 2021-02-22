import { expect } from 'chai';
import { $, setStrictness } from '../src';

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

describe(setStrictness.name, () => {
  it('should return the value of the item in the path, when it exists and strictness is set to true', () => {
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
    const path = $<Something>().extend().cd[0].a.c;
    setStrictness(path, true);

    const result = path(something);

    expect(result).to.be.eq(7);
  });

  it('should return fallback when it i informed and the path is not found, even when strictness is true', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().extend().cd[0].a.c;
    setStrictness(path, true);

    const result = path(something, 'error');

    expect(result).to.be.eq('error');
  });

  it('should throw a TypeError when path does not exist and fallback is set to none and strictness is set to true', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().extend().cd[0].a.c;
    setStrictness(path, true);
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

  it('should return fallback when it is informed and the path is not found, even when strictness is false', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().extend().cd[0].a.c;
    setStrictness(path, false);

    const result = path(something, 'error');

    expect(result).to.be.eq('error');
  });

  it('should return undefined when fallback is not informed, the path is not found and strictness is false', () => {
    const something: Something = {
      ab: 'ab value',
      cd: [] as any,
    };
    const path = $<Something>().extend().cd[0].a.c;
    const strictnessResult = setStrictness(path, false);

    const result = path(something);

    expect(strictnessResult).to.be.eq(path);
    expect(result).to.be.undefined;
  });
});
