/**
 * Returns a URL with trailing `"?"` and `"&"` characters removed.
 *
 * @example
 *
 * ```ts
 * cleanUrlQueryString("/foo?")
 * // "/foo"
 *
 * cleanUrlQueryString("/foo?bar&")
 * // "/foo?bar"
 * ```
 *
 * @param url - URL
 *
 * @public
 */
const cleanUrlQueryString = (url: string) =>
  url.replace(/&$/, "").replace(/\?$/, "");

export default cleanUrlQueryString;
