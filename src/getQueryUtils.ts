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

const getQueryUtils = {
  getNumericValue,
  getQueryValueArray,
  getQueryValueString,
};

export default getQueryUtils;
