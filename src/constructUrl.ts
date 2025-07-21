import { match, P } from "ts-pattern";

const nonEmptyStringPattern = P.string.minLength(1);
const nonZeroNumberPattern = P.union(P.number.positive(), P.number.negative());

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
  path: `/${string}`;
  querySegments?: Record<
    string,
    Array<number> | Array<string> | null | number | string | undefined
  >;
}) =>
  Object.keys(querySegments)
    .sort()
    .reduce(
      (acc, key) =>
        match(querySegments[key])
          .with(
            nonEmptyStringPattern,
            nonZeroNumberPattern,
            (value) => `${acc}${key}=${value}&`,
          )
          .with(
            P.array(nonEmptyStringPattern),
            P.array(nonZeroNumberPattern),
            (segmentArr): string =>
              segmentArr.reduce<string>(
                (segmentAcc, value) => `${segmentAcc}${key}=${value}&`,
                acc,
              ),
          )
          .otherwise(() => acc),
      `${path}?`,
    )
    .replace(/&$/, "")
    .replace(/\?$/, "") as `/${string}`;

export default constructUrl;
