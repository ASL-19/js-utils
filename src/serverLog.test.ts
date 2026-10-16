import { afterEach, beforeEach, expect, test, vi } from "vitest";

import serverLog from "./serverLog.js";

beforeEach(() => {
  vi.stubEnv("NODE_ENV", "production");
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

test("does nothing when NODE_ENV is test", () => {
  vi.stubEnv("NODE_ENV", "test");
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});

  serverLog({ description: "Hello" });

  expect(consoleInfo).not.toHaveBeenCalled();
});

test("warns and does nothing in the browser", () => {
  vi.stubGlobal("window", {});
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});
  const consoleWarn = vi.spyOn(console, "warn").mockImplementation(() => {});

  serverLog({ description: "Hello" });

  expect(consoleInfo).not.toHaveBeenCalled();
  expect(consoleWarn).toHaveBeenCalledOnce();
});

test("logs path, status code and description", () => {
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});

  serverLog({ description: "OK", path: "/en/", statusCode: 200 });

  expect(consoleInfo).toHaveBeenCalledWith(
    expect.stringMatching(
      /^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d \/en\/\] 200: OK$/,
    ),
  );
});

test("logs a status code without a description", () => {
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});

  serverLog({ statusCode: 200 });

  expect(consoleInfo).toHaveBeenCalledWith(
    expect.stringMatching(/^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\] 200$/),
  );
});

test.each([
  [404, "warn"],
  [500, "error"],
] as const)("logs status code %i with console.%s", (statusCode, method) => {
  const consoleMethod = vi.spyOn(console, method).mockImplementation(() => {});

  serverLog({ description: "Error", statusCode });

  expect(consoleMethod).toHaveBeenCalledOnce();
});
