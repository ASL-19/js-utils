const protocolAndHostRegExp = /^https?:\/\/[^/]*$/;
const rootRelativeUrlRegExp = /^\/.*$/;

/**
 * Given provided protocol + host string and root-relative URL string returns an
 * absolute (fully-qualified) URL.
 *
 * @remarks
 *
 * - `protocolAndHost` should look like `"https://asl19.org"`, with no trailing
 *   slash. In ASL19 Next.js projects this is probably
 *   `process.env.NEXT_PUBLIC_WEB_URL`.
 * - `rootRelativeUrl` should start with `"/"`.
 *
 * @example
 *
 * ```ts
 * getAbsoluteUrl({
 *  protocolAndHost: "https://hello.com",
 *  rootRelativeUrl: "/foo",
 * })
 * // "https://hello.com/foo"
 * ```
 *
 * @public
 */
const getAbsoluteUrl = ({
  protocolAndHost,
  rootRelativeUrl,
}: {
  protocolAndHost: string;
  rootRelativeUrl: string;
}) => {
  if (!protocolAndHostRegExp.test(protocolAndHost)) {
    console.warn(
      '[js-utils getAbsoluteUrl] Called with invalid protocolAndHost: should look like "https://asl19.org", with no trailing slash. Returning provided rootRelativeUrl as-is:',
      rootRelativeUrl,
    );

    return rootRelativeUrl;
  }

  if (!rootRelativeUrlRegExp.test(rootRelativeUrl)) {
    console.warn(
      '[js-utils getAbsoluteUrl] Called with invalid rootRelativeUrl: should start with "/". Returning provided rootRelativeUrl as-is:',
      rootRelativeUrl,
    );

    return rootRelativeUrl;
  }

  return `${protocolAndHost}${rootRelativeUrl}`;
};

export default getAbsoluteUrl;
