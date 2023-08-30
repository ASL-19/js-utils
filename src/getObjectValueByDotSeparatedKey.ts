/**
 *
 * e.g.:
 *
 * - dotSeparatedKey: "error1.error2",
 *   object: \{ error1:"internet error"; error2: "loading error" \}
 *   → ["internet error", "loading error"]
 *
 * @public
 */

const getObjectValueByDotSeparatedKey = ({
  dotSeparatedKey,
  object,
}: {
  dotSeparatedKey: string;
  object: object;
}) =>
  dotSeparatedKey
    .split(".")
    .reduce((acc, keySegment) => acc[keySegment as keyof typeof acc], object);

export default getObjectValueByDotSeparatedKey;
