import { expect } from 'chai';
import { jsonPath, $ } from '../src';

describe(jsonPath.name, () => {
  it('should return an iterable with all the fields in the path', () => {
    const something = {
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
    const path = $<typeof something>().cd[0].a.c;

    const result = Array.from(jsonPath(path));

    expect(result).to.be.eql(['cd', '0', 'a', 'c']);
  });

  it('should return undefined when the informed parameter is not a proper Expression', () => {
    const something = {
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
    const path = (x: typeof something) => x.cd[0].a.c;

    const result = jsonPath(path as any);

    expect(result).to.be.undefined;
  });
});
