[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / cleanUrlQueryString

# Function: cleanUrlQueryString()

> **cleanUrlQueryString**(`url`): `string`

Returns a URL with trailing `"?"` and `"&"` characters removed.

## Parameters

### url

`string`

URL

## Returns

`string`

## Example

```ts
cleanUrlQueryString("/foo?")
// "/foo"

cleanUrlQueryString("/foo?bar&")
// "/foo?bar"
```
