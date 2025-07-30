const datePartsRegExp =
  /(?<date>\d\d\d\d-\d\d-\d\d)T(?<hoursMinutesSeconds>\d\d:\d\d:\d\d)/;

const getFormattedDateTime = () => {
  const date = new Date();

  const datePartsMatch = datePartsRegExp.exec(date.toISOString());

  return datePartsMatch &&
    typeof datePartsMatch.groups === "object" &&
    typeof datePartsMatch.groups.date === "string" &&
    typeof datePartsMatch.groups.hoursMinutesSeconds === "string"
    ? `${datePartsMatch.groups.date} ${datePartsMatch.groups.hoursMinutesSeconds}`
    : "????-??-?? ??:??:??"; // This shouldn’t ever happen!
};

/**
 * Logs a formatted message based on the provided description, HTTP status code,
 * and path.
 *
 * @remarks
 *
 * Should only be used on the server — will output a warning and return early if
 * called from the browser.
 *
 * @public
 */
const serverLog = ({
  description,
  path,
  statusCode,
}: {
  description?: string;
  path?: string;
  statusCode?: number;
}) => {
  if (process && process?.env?.NODE_ENV === "test") {
    return;
  }

  if (typeof window === "object") {
    console.warn(
      "[@asl-19/js-utils serverLog]: Called in browser, but should only be called on the server!",
    );
    return;
  }

  const message = (
    (path
      ? `[${getFormattedDateTime()} ${path}] `
      : `[${getFormattedDateTime()}] `) +
    (statusCode && description
      ? `${statusCode}: ${description}`
      : (statusCode ?? description ?? ""))
  ).trim();

  if (statusCode && statusCode >= 400 && statusCode < 500) {
    console.warn(message);
  } else if (statusCode && statusCode >= 500 && statusCode < 600) {
    console.error(message);
  } else {
    console.info(message);
  }
};

export default serverLog;
