/**
 * Given a provided dot-separated key (e.g. `"foo.bar"`) and object extract the
 * corresponding value.
 *
 * @example
 *
 * ```ts
 * getObjectValueByDotSeparatedKey({
 *   dotSeparatedKey: "foo.bar",
 *   object: {
 *     foo: {
 *       bar: "Hello"
 *     }
 *   }
 * })
 * // Hello
 * ```
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
