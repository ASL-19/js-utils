import { expect, test } from "vitest";

import getObjectValueByDotSeparatedKey from "./getObjectValueByDotSeparatedKey.js";

const object = {
  foo: {
    bar: "Hello",
  },
};

test("returns the value at a dot-separated key", () => {
  expect(
    getObjectValueByDotSeparatedKey({ dotSeparatedKey: "foo.bar", object }),
  ).toBe("Hello");
});

test("returns a nested object", () => {
  expect(
    getObjectValueByDotSeparatedKey({ dotSeparatedKey: "foo", object }),
  ).toEqual({ bar: "Hello" });
});

test("returns undefined for a missing leaf key", () => {
  expect(
    getObjectValueByDotSeparatedKey({ dotSeparatedKey: "foo.baz", object }),
  ).toBeUndefined();
});
