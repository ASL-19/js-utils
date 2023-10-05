export type QueryParameterType =
  | "arrayNumber"
  | "arrayString"
  | "number"
  | "string";

export const getQueryValueString = (arrayOrString: Array<string> | string) =>
  Array.isArray(arrayOrString)
    ? // We can safely assume that a provided array will have at least one item due
      // to the way Next.js’s query parsing works
      (arrayOrString?.[0] as string)
    : arrayOrString;

export const getQueryValueArray = (arrayOrString: Array<string> | string) =>
  Array.isArray(arrayOrString) ? arrayOrString : [arrayOrString];

export const getNumericValue = (value: string) =>
  /^\d+$/.test(value) ? parseInt(value) : null;
/**
 * A collection of utility functions to process, validate, and transform query parameters.
 *
 * - `getNumericValue` extracts a numeric value from a string if valid.
 * - `getQueryValueString` retrieves the first string value from a string or an array of strings.
 * - `getQueryValueArray` ensures a given input is returned as an array of strings.
 *
 * @public
 */
const getQueryUtils = {
  getNumericValue,
  getQueryValueArray,
  getQueryValueString,
};

export default getQueryUtils;
