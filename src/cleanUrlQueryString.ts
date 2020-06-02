/**
 * Returns a URL with trailing "?" and "&" characters removed.
 *
 * e.g.:
 *
 * - "/foo?" → "/foo"
 * - "/foo?bar&" → "/foo?bar"
 *
 * @param url - URL
 *
 * @public
 */
const cleanUrlQueryString = (url: string) =>
  url.replace(/&$/, "").replace(/\?$/, "");

export default cleanUrlQueryString;
