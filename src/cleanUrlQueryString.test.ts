import { expect, test } from "vitest";

import cleanUrlQueryString from "./cleanUrlQueryString.js";

test.each([
  ["/path?", "/path"],
  ["/path?foo=1&", "/path?foo=1"],
  ["/path?foo=1&bar=2", "/path?foo=1&bar=2"],
  ["/path", "/path"],
])("cleans %s to %s", (url, expected) => {
  expect(cleanUrlQueryString(url)).toBe(expected);
});
