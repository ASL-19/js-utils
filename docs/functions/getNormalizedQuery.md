[**@asl-19/js-utils**](../README.md)

***

[@asl-19/js-utils](../README.md) / getNormalizedQuery

# Function: getNormalizedQuery()

> **getNormalizedQuery**\<`NormalizedQueryType`\>(`__namedParameters`): `NormalizedQueryType`

Returns a normalized representation of the passed query with default values.

## Type Parameters

### NormalizedQueryType

`NormalizedQueryType`

## Parameters

### \_\_namedParameters

#### defaults

`NormalizedQueryType`

#### query

`ParsedUrlQuery`

#### types

\{ \[queryParameterName in string \| number \| symbol\]: NonNullable\<NormalizedQueryType\[queryParameterName\]\> extends number\[\] ? "arrayNumber" : NonNullable\<NormalizedQueryType\[queryParameterName\]\> extends string\[\] ? "arrayString" : NonNullable\<NormalizedQueryType\[queryParameterName\]\> extends number ? "number" : "string" \}

An object with the non-null/undefined type names of each normalized query
parameter (`"number"` or `"string"`).

TypeScript will automatically suggest the correct type for each parameter.

**Remarks**

This is needed because this function needs to know the expected type of
each query string parameter at runtime (TypeScript types like
`NormalizedQueryType` aren’t accessible in TypeScript/JavaScript logic).

Previously this function used the type of the corresponding `defaults`
value to determine if the value should be converted to a number, however
this isn’t compatible with parameters with `null`/`undefined` default
values.

## Returns

`NormalizedQueryType`

## Remarks

It’s important to normalize the query before use because `ParsedUrlQuery`
(returned by Node’s `querystring.parse()`, and e.g. exposed by Next.js in
`getServerSideProps` and `useRouter().query`) can be an array if multiple
query string parameters with the same key are in the URL. e.g.:

- `?rating=true` → `{rating: "true"}`;
- `?rating=true&rating=false` → `{rating: ["true", false"]}`

This is easy to forget, but could cause runtime errors.
