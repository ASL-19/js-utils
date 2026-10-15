import { expect, test } from "vitest";

import getNormalizedQuery from "./getNormalizedQuery.js";

type NormalizedQuery = {
  ids: Array<number>;
  page: number;
  search: null | string;
  tags: Array<string>;
};

const defaults: NormalizedQuery = {
  ids: [],
  page: 1,
  search: null,
  tags: [],
};

const types = {
  ids: "arrayNumber",
  page: "number",
  search: "string",
  tags: "arrayString",
} as const;

test("returns defaults for an empty query", () => {
  expect(getNormalizedQuery({ defaults, query: {}, types })).toEqual(defaults);
});

test("normalizes each type", () => {
  expect(
    getNormalizedQuery({
      defaults,
      query: { ids: ["1", "x", "3"], page: "2", search: "foo", tags: "a" },
      types,
    }),
  ).toEqual({ ids: [1, 3], page: 2, search: "foo", tags: ["a"] });
});

test("uses the first value of an array for number and string parameters", () => {
  expect(
    getNormalizedQuery({
      defaults,
      query: { page: ["3", "4"], search: ["foo", "bar"] },
      types,
    }),
  ).toEqual({ ...defaults, page: 3, search: "foo" });
});

test("falls back to defaults for invalid or empty values", () => {
  expect(
    getNormalizedQuery({
      defaults,
      query: { page: "two", search: "" },
      types,
    }),
  ).toEqual(defaults);
});

test("ignores query parameters not in types", () => {
  expect(
    getNormalizedQuery({ defaults, query: { other: "foo" }, types }),
  ).toEqual(defaults);
});
