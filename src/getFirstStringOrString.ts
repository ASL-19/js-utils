/**
 *
 * Given an array or a string, return its first string element.
 *
 * @remarks
 *
 * This is useful for normalizing Next.js `router.query` (`ParsedUrlQuery`)
 * values, which can be either a string or an array of strings.
 *
 * If possible you should use {@link getNormalizedQuery} (which uses this
 * function internally) for this, but there may be special cases where it makes
 * sense to use this function directly.
 *
 * @example
 *
 * ```ts
 * getFirstStringOrString(["foo1","foo2"])
 * // "foo1"
 *
 * getFirstStringOrString("foo1")
 * // "foo1"
 * ```
 *
 * @public
 */
const getFirstStringOrString = (arrayOrString?: Array<string> | string) =>
  Array.isArray(arrayOrString) ? arrayOrString?.[0] : arrayOrString;

export default getFirstStringOrString;
