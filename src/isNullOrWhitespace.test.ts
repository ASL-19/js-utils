import { expect, test } from "vitest";

import isNullOrWhitespace from "./isNullOrWhitespace.js";

test.each([
  ["", true],
  [" \n\t", true],
  [" foo ", false],
])("returns %j for %s", (input, expected) => {
  expect(isNullOrWhitespace(input)).toBe(expected);
});

test("returns true for null", () => {
  expect(isNullOrWhitespace(null as unknown as string)).toBe(true);
});
