import { ParsedUrlQuery } from "querystring";
import { match, P } from "ts-pattern";

import {
  getNumericValue,
  getQueryValueArray,
  getQueryValueString,
} from "./getQueryUtils";

type QueryParameterType = "arrayNumber" | "arrayString" | "number" | "string";
/**
 * Returns a normalized representation of the passed query with default values.
 *
 * @remarks
 *
 * Query values are converted to number if the corresponding default value is a
 * number; otherwise they will be typed string.
 *
 * 1. It’s important to normalize the query before use because the
 *    ParsedUrlQuery exposed by Next.js in getServerSideProps and
 *    useRouter().query can be an array if multiple query string parameters with
 *    the same key are in the URL. e.g.:
 *
 *    - `?rating=true` → `{rating: "true"}`;
 *    - `?rating=true&rating=false` → `{rating: ["true", false"]}`
 *
 *    This is easy to forget, but could cause runtime errors.
 *
 * 2. In the future the aforementioned defaults-driven auto-conversion may also
 *    support arrays of strings and arrays of numbers to support use cases like
 *    law_database_web’s multi-tag select).
 *
 * @public
 */
const getNormalizedQuery = <NormalizedQueryType>({
  defaults,
  query,
  types,
}: {
  defaults: NormalizedQueryType;
  query: ParsedUrlQuery;
  /**
   * An object with the non-null/undefined type names of each normalized query
   * parameter (`"number"` or `"string"`).
   *
   * TypeScript will automatically suggest the correct type for each parameter.
   *
   * @remarks
   * This is needed because this function needs to know the expected type of
   * each query string parameter at runtime (TypeScript types like
   * `NormalizedQueryType` aren’t accessible in TypeScript/JavaScript logic).
   *
   * Previously this function used the type of the corresponding `defaults`
   * value to determine if the value should be converted to a number, however
   * this isn’t compatible with parameters with `null`/`undefined` default
   * values.
   */
  types: {
    [queryParameterName in keyof NormalizedQueryType]: NonNullable<
      NormalizedQueryType[queryParameterName]
    > extends Array<number>
      ? "arrayNumber"
      : NonNullable<
          NormalizedQueryType[queryParameterName]
        > extends Array<string>
      ? "arrayString"
      : NonNullable<NormalizedQueryType[queryParameterName]> extends number
      ? "number"
      : "string";
  };
}) =>
  Object.keys(types).reduce((acc, key) => {
    const queryParameterName = key as keyof typeof types;
    const queryParameterType: QueryParameterType = types[queryParameterName];
    const queryParameterValue = query[queryParameterName as string];

    if (queryParameterValue === undefined) {
      return acc;
    }

    const normalizedQueryParameterValue = match(queryParameterType)
      .with("arrayNumber", () =>
        getQueryValueArray(queryParameterValue).reduce<Array<number>>(
          (acc, queryParameterValueItem) =>
            match(getNumericValue(queryParameterValueItem))
              .with(P.number, (numericValue) => [...acc, numericValue])
              .otherwise(() => acc),
          [],
        ),
      )
      .with("arrayString", () => getQueryValueArray(queryParameterValue))
      .with(
        "number",
        () => getNumericValue(getQueryValueString(queryParameterValue)) ?? null,
      )
      .with("string", () => getQueryValueString(queryParameterValue))
      .exhaustive();

    return normalizedQueryParameterValue
      ? { ...acc, [queryParameterName]: normalizedQueryParameterValue }
      : acc;
  }, defaults);

export default getNormalizedQuery;
