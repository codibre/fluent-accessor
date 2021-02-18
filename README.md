[![Actions Status](https://github.com/Codibre/fluent-accessor/workflows/build/badge.svg)](https://github.com/Codibre/fluent-accessor/actions)
[![Actions Status](https://github.com/Codibre/fluent-accessor/workflows/test/badge.svg)](https://github.com/Codibre/fluent-accessor/actions)
[![Actions Status](https://github.com/Codibre/fluent-accessor/workflows/lint/badge.svg)](https://github.com/Codibre/fluent-accessor/actions)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/test_coverage)](https://codeclimate.com/github/Codibre/fluent-accessor/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/4bc45857f25baf6aef9c/maintainability)](https://codeclimate.com/github/Codibre/fluent-accessor/maintainability)
[![Packages](https://david-dm.org/Codibre/fluent-accessor.svg)](https://david-dm.org/Codibre/fluent-accessor)
[![npm version](https://badge.fury.io/js/fluent-accessor.svg)](https://badge.fury.io/js/fluent-accessor)

Dynamically creates an accessor function based on property paths!

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
console.log(func(myInstance, null)); // In case of some property not existing, it will return null;
```

If you want to return undefined instead, you also can, setting off the strictness of the function:

```ts
setStrictness(func, false);
console.log(func(myInstance)); // In case of some property not existing, it will return undefined;
```

You can aplly fallback for a func implicitly

```ts
applyFallback(field4, 123);
console.log(func(myInstance)); // In case of some property not existing, it will return 123;
```

You can retrieve the navigated properties

```ts
const func = jsonPath(func); // return an iterable that yields 'field1', 'field2', 'field3', '0' and, then, 'field4'
```

Finally, using TypeScript, let's suppose you have a function like this:

```ts
function doStuff(field: (a: MyType) => T) {
  // do some stuff
}
```

Typescript can infer the generic types if you call it like this:

```ts
const result = doStuff($('field1', 'field2'));
```

This last option, combined with TypeScript, is very powerful! Because of contextual typing, you can infer each
property to navigate without informing any type! Of course, if you didn't use "any" in your parameters ;)

## But why?

You my ask yourself why would you do all this work if you can simply create an expression like this directly:

```ts
const func = (x) => x.field1.field2.field3[0].field4;
```

The reasons are: **information** and **IDE helping**.
Using **fluent-accessor** you can have more than just a function that returns the value of a nested field:

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
Now, let's try with **fluent-accessor**

```ts
function mySort<T>(arr: T, fields: Expression<T, unknown>);

// Usage
mySort(myPOCOArray, $('foo', 'nestedFoo', 'foo', 'nestedFoo', 'bar'));
```

Now you have it. You have a strong typed function which will help you to not typo over your implementation.

Also, internally, you have access to all the nested field names you'll consider in your index because, I don't know, you want to register it in some place.

# get and getOrDef

You can also use this library to get directly the value of a nested property, like this:

```ts
const result = get(myInstance, 'foo', 'bar', '0', 'fooBar');
```

The advantage of it? result is strongly typed by default!
In this call, if the nested path is not found, result will be undefined.
If you want to define a default value for it, use **getOrDef**

```ts
const result = getOrDef(myInstance, 99, 'foo', 'bar', '0', 'fooBar');
```

## License

Licensed under [MIT](https://en.wikipedia.org/wiki/MIT_License).
