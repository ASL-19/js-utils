/**
 * Given an underscore-cased string, returns a camel-cased string.
 *
 * e.g.:
 *
 * - foo_bar → fooBar
 * - foo → foo
 *
 * @public
 */
const underscoreCaseToCamelCase = (underscoreCasedString: string) =>
  underscoreCasedString.replace(/([_][a-z])/g, (group) =>
    group.toUpperCase().replace("_", "")
  );

export default underscoreCaseToCamelCase;
