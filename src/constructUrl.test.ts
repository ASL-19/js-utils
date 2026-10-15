import { expect, test } from "vitest";

import constructUrl from "./constructUrl.js";

test("returns the path if there are no query segments", () => {
  expect(constructUrl({ path: "/path" })).toBe("/path");
  expect(constructUrl({ path: "/path", querySegments: {} })).toBe("/path");
});

test("sorts query segments by key", () => {
  expect(constructUrl({ path: "/path", querySegments: { a: 1, b: "2" } })).toBe(
    "/path?a=1&b=2",
  );
});

test("repeats the key for each array item", () => {
  expect(
    constructUrl({
      path: "/path",
      querySegments: { numbers: [1, 2], strings: ["a", "b"] },
    }),
  ).toBe("/path?numbers=1&numbers=2&strings=a&strings=b");
});

test("excludes empty, zero, null and undefined values", () => {
  expect(
    constructUrl({
      path: "/path",
      querySegments: {
        emptyArray: [],
        emptyString: "",
        foo: "bar",
        null: null,
        undefined,
        zero: 0,
      },
    }),
  ).toBe("/path?foo=bar");
});

test("includes negative numbers", () => {
  expect(constructUrl({ path: "/path", querySegments: { n: -1 } })).toBe(
    "/path?n=-1",
  );
});
