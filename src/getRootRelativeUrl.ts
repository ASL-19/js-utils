/**
 * Given a fully-qualified URL, returns a root-relative URL.
 *
 * @example
 *
 * ```ts
 * getRootRelativeUrl("https://asl19.org/")
 * // "/"
 * getRootRelativeUrl("https://asl19.org/foo")
 * // "/foo"
 * ```
 *
 * @public
 */
const getRootRelativeUrl = (fullyQualifiedUrl: string) =>
  fullyQualifiedUrl.replace(/^https?:\/\/[^/]*/, "");

export default getRootRelativeUrl;
