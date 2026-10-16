import { expect, test } from "vitest";

import underscoreCaseToCamelCase from "./underscoreCaseToCamelCase.js";

test.each([
  ["foo_bar_baz", "fooBarBaz"],
  ["foo", "foo"],
  ["foo_1", "foo_1"],
])("converts %s to %s", (input, expected) => {
  expect(underscoreCaseToCamelCase(input)).toBe(expected);
});
