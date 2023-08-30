/**
 * A collection of plain JavaScript utility functions for ASL19 projects.
 *
 * These functions don’t rely on DOM, React, or React Native APIs.
 *
 * @packageDocumentation
 */

import { ParsedUrlQuery } from 'querystring';

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
 * Given path and querySegments. Return url with query parameters
 *
 * @public
 *
 */
export declare const constructUrl: ({ path, querySegments, }: {
    path: string;
    querySegments?: {
        [key: string]: string | number;
    };
}) => string;

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
 * Returns a normalized representation of the passed query with default values.
 *
 * Query values are converted to number if the corresponding default value is a
 * number; otherwise they will be typed string.
 *
 * @remarks
 * 1. It’s important to normalize the query before use because the
 *    ParsedUrlQuery exposed by Next.js in getServerSideProps and
 *    useRouter().query can be an array if multiple query string parameters with
 *    the same key are in the URL. e.g.:
 *
 *    - `?rating=true` → `{rating: "true"}`;
 *    - `?rating=true&rating=false` → `{rating: ["true", false"]}`
 *
 *    This is easy to forget, but could cause runtime errors.
 *
 * 2. In the future the aforementioned defaults-driven auto-conversion may also
 *    support arrays of strings and arrays of numbers to support use cases like
 *    law_database_web’s multi-tag select).
 *
 * @public
 */
export declare const getNormalizedQuery: <NormalizedQueryType>({ defaults, query, types, }: {
    defaults: NormalizedQueryType;
    query: ParsedUrlQuery;
    /**
     * An object with the non-null/undefined type names of each normalized query
     * parameter (`"number"` or `"string"`).
     *
     * TypeScript will automatically suggest the correct type for each parameter.
     *
     * @remarks
     * This is needed because this function needs to know the expected type of
     * each query string parameter at runtime (TypeScript types like
     * `NormalizedQueryType` aren’t accessible in TypeScript/JavaScript logic).
     *
     * Previously this function used the type of the corresponding `defaults`
     * value to determine if the value should be converted to a number, however
     * this isn’t compatible with parameters with `null`/`undefined` default
     * values.
     */
    types: { [queryParameterName in keyof NormalizedQueryType]: NonNullable<NormalizedQueryType[queryParameterName]> extends number ? "number" : "string"; };
}) => NormalizedQueryType;

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
