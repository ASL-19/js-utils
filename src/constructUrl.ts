/**
 *
 * Given path and querySegments. Return url with query parameters
 *
 * @public
 *
 */

import { match, P } from "ts-pattern";

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
      `${path}?`
    )
    .replace(/&$/, "")
    .replace(/\?$/, "");

export default constructUrl;
