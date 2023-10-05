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
  path: `/${string}`;
  querySegments?: {
    [key: string]:
      | Array<string>
      | string
      | Array<number>
      | number
      | null
      | undefined;
  };
}) =>
  Object.keys(querySegments)
    .reduce(
      (acc, key) =>
        match(querySegments[key])
          .with(
            P.string.minLength(1),
            P.union(P.number.positive(), P.number.negative()),
            (segment) => `${acc}${key}=${segment}&`,
          )
          .with(P.array(P.string), (segmentArr) =>
            segmentArr.reduce(
              (segmentAcc, segment) => `${segmentAcc}${key}=${segment}&`,
              acc,
            ),
          )
          .with(
            P.array(P.union(P.number.positive(), P.number.negative())),
            (segmentArr) =>
              segmentArr.reduce(
                (segmentAcc, segment) => `${segmentAcc}${key}=${segment}&`,
                acc,
              ),
          )
          .otherwise(() => acc),
      `${path}?`,
    )
    .replace(/&$/, "")
    .replace(/\?$/, "") as `/${string}`;

export default constructUrl;
