[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / getFirstStringOrString

# Function: getFirstStringOrString()

> **getFirstStringOrString**(`arrayOrString?`): `string` \| `undefined`

Given an array or a string, return its first string element.

## Parameters

### arrayOrString?

`string` \| `string`[]

## Returns

`string` \| `undefined`

## Remarks

This is useful for normalizing Next.js `router.query` (`ParsedUrlQuery`)
values, which can be either a string or an array of strings.

If possible you should use [getNormalizedQuery](getNormalizedQuery.md) (which uses this
function internally) for this, but there may be special cases where it makes
sense to use this function directly.

## Example

```ts
getFirstStringOrString(["foo1","foo2"])
// "foo1"

getFirstStringOrString("foo1")
// "foo1"
```
