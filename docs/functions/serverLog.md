[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / serverLog

# Function: serverLog()

> **serverLog**(`__namedParameters`): `void`

Logs a formatted message based on the provided description, HTTP status code,
and path.

## Parameters

### \_\_namedParameters

#### description?

`string`

#### path?

`string`

#### statusCode?

`number`

## Returns

`void`

## Remarks

Should only be used on the server — will output a warning and return early if
called from the browser.
