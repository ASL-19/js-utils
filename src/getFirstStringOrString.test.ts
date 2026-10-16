import { expect, test } from "vitest";

import getFirstStringOrString from "./getFirstStringOrString.js";

test.each([
  [["foo1", "foo2"], "foo1"],
  ["foo1", "foo1"],
  [[], undefined],
  [undefined, undefined],
])("returns the first string of %j", (input, expected) => {
  expect(getFirstStringOrString(input)).toBe(expected);
});
