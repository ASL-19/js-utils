/**
 * A collection of plain JavaScript utility functions for ASL19 projects.
 *
 * These functions don’t rely on DOM, React, or React Native APIs.
 *
 * @packageDocumentation
 */

/**
 *
 * Cast an object to a specified data type
 *
 * @public
 *
 */
export declare const asType: <T>(value: T) => T;

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
 *
 * Given an URL that isn’t root-relative (starting with "/"
 * and return the absoluteUrl with current active web url
 *
 * e.g.:
 *
 * - "/foo","https://hello.com" → "https://hello.com/foo"
 *
 * @public
 *
 */
export declare const getAbsoluteUrl: ({ rootRelativeUrl, webPublicUrl, }: {
    rootRelativeUrl: string;
    webPublicUrl: string;
}) => string;

/**
 *
 * Given an array or a string, return its first string element
 *
 * * e.g.:
 *
 * - ["foo1","foo2"] → "foo"
 *
 * @public
 */
export declare const getFirstStringOrString: (arrayOrString?: Array<string> | string) => string;

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
export declare const getObjectValueByDotSeparatedKey: ({ dotSeparatedKey, object, }: {
    dotSeparatedKey: string;
    object: object;
}) => object;

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
 *
 * Given status code, description and url; console out the error message
 *
 * @public
 */
export declare const logError: ({ description, statusCode, url, }: {
    description: string;
    statusCode: number;
    url: string;
}) => void;

/**
 * Replace Arabic (Hindu–Arabic/Western Arabic/Latin) numerals with Persian
 * (Perso-Arabic) numerals.
 *
 * @public
 */
export declare const replaceArabicNumeralsWithPersianNumerals: (input: string) => string;

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
