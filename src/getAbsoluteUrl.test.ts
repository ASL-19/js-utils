import { afterEach, expect, test, vi } from "vitest";

import getAbsoluteUrl from "./getAbsoluteUrl.js";

afterEach(() => {
  vi.restoreAllMocks();
});

test("joins protocolAndHost and rootRelativeUrl", () => {
  expect(
    getAbsoluteUrl({
      protocolAndHost: "https://asl19.org",
      rootRelativeUrl: "/en/",
    }),
  ).toBe("https://asl19.org/en/");
});

test.each([
  ["https://asl19.org/", "/en/"],
  ["asl19.org", "/en/"],
  ["https://asl19.org", "en/"],
])(
  "warns and returns rootRelativeUrl as-is for %s and %s",
  (protocolAndHost, rootRelativeUrl) => {
    const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {});

    expect(getAbsoluteUrl({ protocolAndHost, rootRelativeUrl })).toBe(
      rootRelativeUrl,
    );
    expect(consoleWarn).toHaveBeenCalledOnce();
  },
);
