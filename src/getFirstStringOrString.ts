/**
 *
 * Given an array or a string, return its first string element
 *
 * * e.g.:
 *
 * - ["foo1","foo2"] → "foo"
 *
 * @public
 */

const getFirstStringOrString = (arrayOrString?: Array<string> | string) =>
  Array.isArray(arrayOrString) ? arrayOrString?.[0] : arrayOrString;

export default getFirstStringOrString;
