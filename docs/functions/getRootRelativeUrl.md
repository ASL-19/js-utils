[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / getRootRelativeUrl

# Function: getRootRelativeUrl()

> **getRootRelativeUrl**(`fullyQualifiedUrl`): `string`

Given a fully-qualified URL, returns a root-relative URL.

## Parameters

### fullyQualifiedUrl

`string`

## Returns

`string`

## Example

```ts
getRootRelativeUrl("https://asl19.org/")
// "/"
getRootRelativeUrl("https://asl19.org/foo")
// "/foo"
```
