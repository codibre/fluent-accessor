[![Actions Status](https://github.com/Codibre/json-navigator/workflows/build/badge.svg)](https://github.com/Codibre/json-navigator/actions)
[![Actions Status](https://github.com/Codibre/json-navigator/workflows/test/badge.svg)](https://github.com/Codibre/json-navigator/actions)
[![Actions Status](https://github.com/Codibre/json-navigator/workflows/lint/badge.svg)](https://github.com/Codibre/json-navigator/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/test_coverage)](https://codeclimate.com/github/Codibre/json-navigator/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/maintainability)](https://codeclimate.com/github/Codibre/json-navigator/maintainability)
[![Packages](https://david-dm.org/Codibre/json-navigator.svg)](https://david-dm.org/Codibre/json-navigator)
[![npm version](https://badge.fury.io/js/%40codibre%2Fjson-navigator.svg)](https://badge.fury.io/js/%40codibre%2Fjson-navigator)

Creates an object that represent json paths and can be used to access them!

## How to use it

Just use **nav**, **n**, **root** or **r** to starts the navigation:

```ts
const field4 = r<MyType>().field1.field2.field3[0].field4;
```

You can convert this result into a function that returns the property value:

```ts
const func = expression(field4); // return a function equivalent to (x) => x.field1.field2.field3[0].field4

console.log(func(myInstance));
```

You can also generates a func with a fallback if some property doesn't exists in the path

```ts
const func = expression(field4, undefined);
```

Finally, using TypeScript, let's suppose you have a function like this:

```ts
function doStuff(field: Navigator<MyType>) {
  // do some stuff
}
```

Typescript can infer the generic types if you call it:

```ts
const result = doStuff(r().field1.field2);
```

## But why?

You my ask yourself would to do all this work if you can simply create an expression like this directly:

```ts
const func = (x) => x.field1.field2.field3[0].field4;
```

The reasons are: **information** and **IDE helping**.
Using **json-navigator** you can have more than just a function that returns the value of a nested field:

- You can know the path you're accessing just by using **jsonPath**;
- You have control of scope: you know that the generated expression will only return the field value;
- You can have auto-complete while programming even though you're not dealing with the said object;
- You can compose the expression to access the nested property dynamically;

## Some possible applications

Imagine you have a object like this:

```ts
interface Nested {
  nestedFoo: MyPOCO;
  bar: string;
}

interface MyPOCO {
  foo: Nested;
  bar: string;
}
```

And you want to create a function that sorts an array by a nested field. Let's say the first implementation
you just use a string to do it:

```ts
function mySort<T>(arr: T, fields: string);

// Usage
mySort(myPOCOArray, 'foo.nestedfoo.foo.nestedFoo.bar');
```

That's can work, but because the lack of IDE auto-complete and lint helping, you may let a typo pass, like
in the example above.
Let's try with an array:

```ts
function mySort<T>(arr: T, fields: Array<T[keyof T]>);

// Usage
mySort(myPOCOArray, ['foo', 'nestedFoo', 'foo', 'nestedFoo', 'bar']);
```

Well, that actually will not compile because of the type you specified for the array. You can use **string**, but then, you'll have the same problem of the first approach.
Now, let's try with **json-navigator**

```ts
function mySort<T>(arr: T, fields: Navigator<T>);

// Usage
mySort(myPOCOArray, n().foo.nestedFoo.foo.nestedFoo.bar);
```

Now you have it. You have a strong typed function which will help you to not typo over your implementation.
Also, internally, you have access to all the nested field names you'll consider in your index because, I don't know, you want to register it in some place.

## That's looks interesting, but with strings I have more flexibility

You can still use an array of strings to generate a Navigator object at the loss of typing, like this:

```ts
// With totally loss of typing
const navigator = r(['field1', 'field2', 'field3])

// Loosing the type of the result
const navigator = r<MyType>(['field1', 'field2', 'field3'])
```

Without the typing, of course, auto-complete will not help you to write your code right and some typo may happen.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
