/**
 * A collection of plain JavaScript utility functions for ASL19 projects.
 *
 * These functions don’t rely on DOM, React, or React Native APIs.
 *
 * @packageDocumentation
 */


/**
 * Returns a URL with trailing "?" and "&" characters removed.
 *
 * e.g.:
 *
 * - "/foo?" → "/foo"
 * - "/foo?bar&" → "/foo?bar"
 *
 * @param url - URL
 *
 * @public
 */
export declare const cleanUrlQueryString: (url: string) => string;

/**
 * Given a fully-qualified URL, returns a root-relative URL.
 *
 * e.g.:
 *
 * - "https://asl19.org/" → "/"
 * - "https://asl19.org/foo" → "/foo"
 *
 * @public
 */
export declare const getRootRelativeUrl: (fullyQualifiedUrl: string) => string;

/**
 * Returns true if string is null, an empty string, or a string of whitespace characters.
 *
 * @public
 */
export declare const isNullOrWhitespace: (input: string) => boolean;

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
export declare const underscoreCaseToCamelCase: (underscoreCasedString: string) => string;

export { }
