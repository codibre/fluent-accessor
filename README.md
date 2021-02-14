[![Actions Status](https://github.com/Codibre/expression-tree/workflows/build/badge.svg)](https://github.com/Codibre/expression-tree/actions)
[![Actions Status](https://github.com/Codibre/expression-tree/workflows/test/badge.svg)](https://github.com/Codibre/expression-tree/actions)
[![Actions Status](https://github.com/Codibre/expression-tree/workflows/lint/badge.svg)](https://github.com/Codibre/expression-tree/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/test_coverage)](https://codeclimate.com/github/Codibre/expression-tree/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/maintainability)](https://codeclimate.com/github/Codibre/expression-tree/maintainability)
[![Packages](https://david-dm.org/Codibre/expression-tree.svg)](https://david-dm.org/Codibre/expression-tree)
[![npm version](https://badge.fury.io/js/%40codibre%2Fexpression-tree.svg)](https://badge.fury.io/js/%40codibre%2Fexpression-tree)

Dynamically creates an accessor functions based on property paths!

## How to use it

Just use **\$** to starts the navigation:

```ts
const func = $<MyType>().field1.field2.field3[0].field4;
```

func will be an accessor for the field4 following the whole specified path

```ts
console.log(func(myInstance)); // returns the value of myInstance.field1.field2.field3[0].field4;
```

You can also run it with a fallback

```ts
console.log(func(myInstance, undefined)); // In case of some property not existing, it will return undefined;
```

You can also generates a func with a fallback if some property doesn't exists in the path

```ts
const func = applyFallback(field4, undefined);
```

You can retrieve the properties navigated

```ts
const func = jsonPath(func); // return an iterable that yields 'field1', 'field2', 'field3', '0' and, then, 'field4'
```

Finally, using TypeScript, let's suppose you have a function like this:

```ts
function doStuff(field: (a: MyType) => T>) {
  // do some stuff
}
```

Typescript can infer the generic types if you call it like this:

```ts
const result = doStuff($('field1', 'field2'));
```

## But why?

You my ask yourself why would you do all this work if you can simply create an expression like this directly:

```ts
const func = (x) => x.field1.field2.field3[0].field4;
```

The reasons are: **information** and **IDE helping**.
Using **expression-tree** you can have more than just a function that returns the value of a nested field:

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
Now, let's try with **expression-tree**

```ts
function mySort<T>(arr: T, fields: Expression<T, unknown>);

// Usage
mySort(myPOCOArray, $('foo', 'nestedFoo', 'foo', 'nestedFoo', 'bar');
```

Now you have it. You have a strong typed function which will help you to not typo over your implementation.
Also, internally, you have access to all the nested field names you'll consider in your index because, I don't know, you want to register it in some place.

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
