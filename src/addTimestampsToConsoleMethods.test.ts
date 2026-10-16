import { afterEach, expect, test, vi } from "vitest";

const originalConsoleMethods = { ...console };

// The module tracks whether it has already wrapped the console methods, so
// import a fresh copy for each test
const importAddTimestampsToConsoleMethods = async () => {
  vi.resetModules();

  return (await import("./addTimestampsToConsoleMethods.js")).default;
};

afterEach(() => {
  Object.assign(console, originalConsoleMethods);
  vi.restoreAllMocks();
});

test.each(["log", "info", "warn", "error"] as const)(
  "prefixes console.%s messages with a timestamp",
  async (method) => {
    const consoleMethod = vi
      .spyOn(console, method)
      .mockImplementation(() => {});

    (await importAddTimestampsToConsoleMethods())();
    // eslint-disable-next-line no-console
    console[method]("Hello", 1);

    expect(consoleMethod).toHaveBeenCalledWith(
      expect.stringMatching(/^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\] Hello$/),
      1,
    );
  },
);

test("keeps format strings in the first argument", async () => {
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});

  (await importAddTimestampsToConsoleMethods())();
  console.info("%d users", 5);

  expect(consoleInfo).toHaveBeenCalledWith(
    expect.stringMatching(/^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\] %d users$/),
    5,
  );
});

test("adds the timestamp as a separate argument before a non-string", async () => {
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});
  const object = { foo: "bar" };

  (await importAddTimestampsToConsoleMethods())();
  console.info(object);

  expect(consoleInfo).toHaveBeenCalledWith(
    expect.stringMatching(/^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d\]$/),
    object,
  );
});

test("doesn’t add a timestamp to a message that already has one", async () => {
  const consoleInfo = vi.spyOn(console, "info").mockImplementation(() => {});
  const message = "[2025-01-01 01:23:45 /en/] Hello";

  (await importAddTimestampsToConsoleMethods())();
  console.info(message);

  expect(consoleInfo).toHaveBeenCalledWith(message);
});

test("only wraps the console methods once", async () => {
  const addTimestampsToConsoleMethods =
    await importAddTimestampsToConsoleMethods();
  const consoleInfo = vi.fn();

  addTimestampsToConsoleMethods();
  console.info = consoleInfo;
  addTimestampsToConsoleMethods();

  expect(console.info).toBe(consoleInfo);
});
