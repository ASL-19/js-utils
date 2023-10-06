import { ParsedUrlQuery } from "querystring";
import { match, P } from "ts-pattern";

type QueryParameterType = "arrayNumber" | "arrayString" | "number" | "string";

const getQueryValueString = (arrayOrString: Array<string> | string) =>
  Array.isArray(arrayOrString)
    ? // We can safely assume that a provided array will have at least one item due
      // to the way Node’s querystring.parse() works
      (arrayOrString?.[0] as string)
    : arrayOrString;

const getQueryValueArray = (arrayOrString: Array<string> | string) =>
  Array.isArray(arrayOrString) ? arrayOrString : [arrayOrString];

const getNumericValue = (value: string) =>
  /^\d+$/.test(value) ? parseInt(value) : null;

/**
 * Returns a normalized representation of the passed query with default values.
 *
 * @remarks
 * It’s important to normalize the query before use because `ParsedUrlQuery`
 * (returned by Node’s `querystring.parse()`, and e.g. exposed by Next.js in
 * `getServerSideProps` and `useRouter().query`) can be an array if multiple
 * query string parameters with the same key are in the URL. e.g.:
 *
 * - `?rating=true` → `{rating: "true"}`;
 * - `?rating=true&rating=false` → `{rating: ["true", false"]}`
 *
 * This is easy to forget, but could cause runtime errors.
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
  Object.keys(types).reduce((acc, queryParameterName) => {
    const queryParameterType: QueryParameterType =
      types[queryParameterName as keyof typeof types];
    const queryParameterValue = query[queryParameterName];

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
