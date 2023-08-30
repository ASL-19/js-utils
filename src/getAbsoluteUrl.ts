/**
 *
 * Given an URL that isn’t root-relative (starting with "/"
 * and return the absoluteUrl with current active web url
 *
 * e.g.:
 *
 * - "/foo","https://hello.com" → "https://hello.com/foo"
 *
 * @public
 *
 */

const getAbsoluteUrl = ({
  rootRelativeUrl,
  webPublicUrl,
}: {
  rootRelativeUrl: string;
  webPublicUrl: string;
}) => {
  if (rootRelativeUrl.startsWith("/")) {
    return `${webPublicUrl}${rootRelativeUrl}`;
  }

  console.warn(
    'getAbsoluteUrl called with URL that isn’t root-relative (starting with "/". Returning as-is:',
    rootRelativeUrl
  );

  return rootRelativeUrl;
};

export default getAbsoluteUrl;
