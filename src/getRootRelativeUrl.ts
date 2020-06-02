/**
 * Given a fully-qualified URL, returns a root-relative URL.
 *
 * e.g.:
 *
 * - "https://asl19.org/" → "/"
 * - "https://asl19.org/foo" → "/foo"
 *
 * @public
 */
const getRootRelativeUrl = (fullyQualifiedUrl: string): string =>
  fullyQualifiedUrl.replace(/^https?:\/\/[^/]*/, "");

export default getRootRelativeUrl;
