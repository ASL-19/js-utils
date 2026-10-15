import getFormattedDateTime, {
  startsWithDateStampRegExp,
} from "./getFormattedDateTime.js";

let hasAddedTimestamps = false;

const wrapConsoleMethodWithTimestampPrefix =
  (consoleMethod: typeof console.log): typeof console.log =>
  (...args: Array<unknown>) => {
    const [firstArg, ...restArgs] = args;

    if (typeof firstArg === "string") {
      if (startsWithDateStampRegExp.test(firstArg)) {
        consoleMethod(...args);
      } else {
        // Merge the prefix into the first argument (rather than passing it as
        // a separate argument) so format strings like "%d users" still work
        consoleMethod(`[${getFormattedDateTime()}] ${firstArg}`, ...restArgs);
      }
    } else {
      consoleMethod(`[${getFormattedDateTime()}]`, ...args);
    }
  };

/**
 *
 * Add timestamps to console.log, console.info, console.warn, and console.error
 * messages.
 *
 * If a message already starts with a timestamp (in the format added by this
 * function), another timestamp will not be added.
 * @public
 */
const addTimestampsToConsoleMethods = () => {
  if (hasAddedTimestamps) {
    return;
  }

  hasAddedTimestamps = true;

  // eslint-disable-next-line no-console
  console.log = wrapConsoleMethodWithTimestampPrefix(console.log);
  console.info = wrapConsoleMethodWithTimestampPrefix(console.info);
  console.warn = wrapConsoleMethodWithTimestampPrefix(console.warn);
  console.error = wrapConsoleMethodWithTimestampPrefix(console.error);
};

export default addTimestampsToConsoleMethods;
