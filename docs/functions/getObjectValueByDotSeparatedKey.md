[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / getObjectValueByDotSeparatedKey

# Function: getObjectValueByDotSeparatedKey()

> **getObjectValueByDotSeparatedKey**\<`Leaf`\>(`__namedParameters`): `Tree`\<`Leaf`\>

Given a provided dot-separated key (e.g. `"foo.bar"`) and object extract the
corresponding value.

## Type Parameters

### Leaf

`Leaf`

## Parameters

### \_\_namedParameters

#### dotSeparatedKey

`string`

#### object

`Tree`\<`Leaf`\>

## Returns

`Tree`\<`Leaf`\>

## Example

```ts

const object = {
  foo: {
    bar: "Hello"
  }
};

getObjectValueByDotSeparatedKey({
  dotSeparatedKey: "foo.bar",
  object,
})
// Hello

getObjectValueByDotSeparatedKey({
  dotSeparatedKey: "foo",
  object,
})
// { bar: "Hello"}

getObjectValueByDotSeparatedKey({
  dotSeparatedKey: "abc",
  object,
})
// undefined
```
