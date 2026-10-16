import { expect, test } from "vitest";

import getRootRelativeUrl from "./getRootRelativeUrl.js";

test.each([
  ["https://asl19.org/en/?foo=1", "/en/?foo=1"],
  ["http://localhost:3000/en/", "/en/"],
  ["https://asl19.org", ""],
  ["/en/", "/en/"],
])("returns the root-relative URL of %s", (url, expected) => {
  expect(getRootRelativeUrl(url)).toBe(expected);
});
