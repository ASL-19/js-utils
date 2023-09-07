type Tree<T> = {
  [key: string | number]: T | Tree<T> | undefined;
};

/**
 * Given a provided dot-separated key (e.g. `"foo.bar"`) and object extract the
 * corresponding value.
 *
 * @example
 *
 * ```ts
 *
 * const object = {
 *   foo: {
 *     bar: "Hello"
 *   }
 * };
 *
 * getObjectValueByDotSeparatedKey({
 *   dotSeparatedKey: "foo.bar",
 *   object,
 * })
 * // Hello
 *
 * getObjectValueByDotSeparatedKey({
 *   dotSeparatedKey: "foo",
 *   object,
 * })
 * // { bar: "Hello"}
 *
 * getObjectValueByDotSeparatedKey({
 *   dotSeparatedKey: "abc",
 *   object,
 * })
 * // undefined
 * ```
 *
 * @public
 */
const getObjectValueByDotSeparatedKey = <Leaf>({
  dotSeparatedKey,
  object,
}: {
  dotSeparatedKey: string;
  object: Tree<Leaf>;
}) =>
  dotSeparatedKey
    .split(".")
    .reduce((acc, keySegment) => acc[keySegment] as Tree<Leaf>, object);

export default getObjectValueByDotSeparatedKey;
