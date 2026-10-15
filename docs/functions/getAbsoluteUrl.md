[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / getAbsoluteUrl

# Function: getAbsoluteUrl()

> **getAbsoluteUrl**(`__namedParameters`): `string`

Given provided protocol + host string and root-relative URL string returns an
absolute (fully-qualified) URL.

## Parameters

### \_\_namedParameters

#### protocolAndHost

`string`

#### rootRelativeUrl

`string`

## Returns

`string`

## Remarks

- `protocolAndHost` should look like `"https://asl19.org"`, with no trailing
  slash. In ASL19 Next.js projects this is probably
  `process.env.NEXT_PUBLIC_WEB_URL`.
- `rootRelativeUrl` should start with `"/"`.

## Example

```ts
getAbsoluteUrl({
 protocolAndHost: "https://hello.com",
 rootRelativeUrl: "/foo",
})
// "https://hello.com/foo"
```
