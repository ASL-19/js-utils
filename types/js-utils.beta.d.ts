/**
 * A collection of plain JavaScript utility functions for ASL19 projects.
 *
 * These functions don’t rely on DOM, React, or React Native APIs.
 *
 * @packageDocumentation
 */

import { ParsedUrlQuery } from 'querystring';

/**
 * Cast an object to a specified data type.
 *
 * @public
 */
export declare const asType: <T>(value: T) => T;

/**
 * Returns a URL with trailing `"?"` and `"&"` characters removed.
 *
 * @example
 *
 * ```ts
 * cleanUrlQueryString("/foo?")
 * // "/foo"
 *
 * cleanUrlQueryString("/foo?bar&")
 * // "/foo?bar"
 * ```
 *
 * @param url - URL
 *
 * @public
 */
export declare const cleanUrlQueryString: (url: string) => string;

/**
 * Format a root-relative URL based on provided path and query string key-value
 * pairs.
 *
 * @public
 */
export declare const constructUrl: ({ path, querySegments, }: {
    path: `/${string}`;
    querySegments?: {
        [key: string]: string | number | string[] | number[] | null | undefined;
    } | undefined;
}) => `/${string}`;

/**
 * Given provided protocol + host string and root-relative URL string returns an
 * absolute (fully-qualified) URL.
 *
 * @remarks
 *
 * - `protocolAndHost` should look like `"https://asl19.org"`, with no trailing
 *   slash. In ASL19 Next.js projects this is probably
 *   `process.env.NEXT_PUBLIC_WEB_URL`.
 * - `rootRelativeUrl` should start with `"/"`.
 *
 * @example
 *
 * ```ts
 * getAbsoluteUrl({
 *  protocolAndHost: "https://hello.com",
 *  rootRelativeUrl: "/foo",
 * })
 * // "https://hello.com/foo"
 * ```
 *
 * @public
 */
export declare const getAbsoluteUrl: ({ protocolAndHost, rootRelativeUrl, }: {
    protocolAndHost: string;
    rootRelativeUrl: string;
}) => string;

/**
 *
 * Given an array or a string, return its first string element.
 *
 * @remarks
 *
 * This is useful for normalizing Next.js `router.query` (`ParsedUrlQuery`)
 * values, which can be either a string or an array of strings.
 *
 * If possible you should use {@link getNormalizedQuery} (which uses this
 * function internally) for this, but there may be special cases where it makes
 * sense to use this function directly.
 *
 * @example
 *
 * ```ts
 * getFirstStringOrString(["foo1","foo2"])
 * // "foo1"
 *
 * getFirstStringOrString("foo1")
 * // "foo1"
 * ```
 *
 * @public
 */
export declare const getFirstStringOrString: (arrayOrString?: Array<string> | string) => string | undefined;

/**
 * Returns a normalized representation of the passed query with default values.
 *
 * @remarks
 * It’s important to normalize the query before use because `ParsedUrlQuery`
 * (returned by Node’s `querystring.parse()`, and e.g. exposed by Next.js in
 * `getServerSideProps` and `useRouter().query`) can be an array if multiple
 * query string parameters with the same key are in the URL. e.g.:
 *
 * - `?rating=true` → `{rating: "true"}`;
 * - `?rating=true&rating=false` → `{rating: ["true", false"]}`
 *
 * This is easy to forget, but could cause runtime errors.
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
    types: { [queryParameterName in keyof NormalizedQueryType]: NonNullable<NormalizedQueryType[queryParameterName]> extends number[] ? "arrayNumber" : NonNullable<NormalizedQueryType[queryParameterName]> extends string[] ? "arrayString" : NonNullable<NormalizedQueryType[queryParameterName]> extends number ? "number" : "string"; };
}) => NormalizedQueryType;

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
export declare const getObjectValueByDotSeparatedKey: <Leaf>({ dotSeparatedKey, object, }: {
    dotSeparatedKey: string;
    object: Tree<Leaf>;
}) => Tree<Leaf>;

/**
 * Given a fully-qualified URL, returns a root-relative URL.
 *
 * @example
 *
 * ```ts
 * getRootRelativeUrl("https://asl19.org/")
 * // "/"
 * getRootRelativeUrl("https://asl19.org/foo")
 * // "/foo"
 * ```
 *
 * @public
 */
export declare const getRootRelativeUrl: (fullyQualifiedUrl: string) => string;

/**
 * Returns true if string is null, an empty string, or a string of whitespace
 * characters.
 *
 * @public
 */
export declare const isNullOrWhitespace: (input: string) => boolean;

/**
 * Replace Arabic (Hindu–Arabic/Western Arabic/Latin) numerals with Persian
 * (Perso-Arabic) numerals.
 *
 * @public
 */
export declare const replaceArabicNumeralsWithPersianNumerals: (input: string) => string;

/**
 * Logs a formatted message based on the provided description, HTTP status code,
 * and path.
 *
 * @remarks
 *
 * Should only be used on the server — will output a warning and return early if
 * called from the browser.
 *
 * @public
 */
export declare const serverLog: ({ description, path, statusCode, }: {
    description?: string | undefined;
    path?: string | undefined;
    statusCode?: number | undefined;
}) => void;

declare type Tree<T> = {
    [key: string | number]: T | Tree<T> | undefined;
};

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
export declare const underscoreCaseToCamelCase: (underscoreCasedString: string) => string;

export { }
