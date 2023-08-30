/**
 * Given an underscore-cased string, returns a camel-cased string.
 *
 * @example
 *
 * ```ts
 * - underscoreCaseToCamelCase("foo_bar")
 * // "fooBar"
 * - underscoreCaseToCamelCase("foo")
 * // "foo"
 * ```
 *
 * @public
 */
const underscoreCaseToCamelCase = (underscoreCasedString: string) =>
  underscoreCasedString.replace(/([_][a-z])/g, (group) =>
    group.toUpperCase().replace("_", ""),
  );

export default underscoreCaseToCamelCase;
