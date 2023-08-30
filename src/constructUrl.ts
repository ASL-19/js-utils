import { match, P } from "ts-pattern";

/**
 * Format a root-relative URL based on provided path and query string key-value
 * pairs.
 *
 * @public
 */
const constructUrl = ({
  path,
  querySegments = {},
}: {
  path: string;
  querySegments?: { [key: string]: string | number | null | undefined };
}) =>
  Object.keys(querySegments)
    .reduce(
      (acc, key) =>
        match(querySegments[key])
          .with(P.string, P.number, (segment) => `${acc}${key}=${segment}&`)
          .otherwise(() => acc),
      `${path}?`,
    )
    .replace(/&$/, "")
    .replace(/\?$/, "");

export default constructUrl;
