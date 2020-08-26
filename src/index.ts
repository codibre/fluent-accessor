/* eslint-disable no-magic-numbers */

// typing test

const jsonPath = Symbol.for('JsonNavigatorGetJsonPath');
const expression = Symbol.for('JsonNavigatorGetExpression');
type Prop = string | number | symbol;

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

interface Test<T> {
  [jsonPath](): Prop[];
}
type ExTest<T, TK = T> = Test<T> &
  { [key in keyof TK]: ExTest<T, TK[key]> } & {
    [expression]: (x: T) => TK;
  };

function a(t: Test<Something>) {
  return undefined;
}

function getProxy<T, K extends keyof T>(fields: Prop[]): ExTest<T, T[K]> {
  return new Proxy(fields, {
    get(target, field: Prop) {
      switch (field) {
        case jsonPath:
          return () => target;
        case expression:
          return (x: any) => {
            let result = x;
            target.forEach((prop) => (result = result[prop]));
            return result;
          };
        default:
          return getProxy([...fields, field]);
      }
    },
  }) as any;
}

function b<T>(): ExTest<T>;
function b<T = any>(field: string): ExTest<T, any>;
function b<T, K extends keyof T>(field?: K | string): ExTest<T, T[K]> {
  return getProxy<T, K>(field ? [field] : []);
}

console.log(b<Something>().cd[0].a.c[jsonPath]());
const accessor = b<Something>().cd[0].a.c[expression];
console.log(
  accessor({
    cd: [
      {
        a: {
          c: 7,
        },
      },
    ],
  } as Something),
);
