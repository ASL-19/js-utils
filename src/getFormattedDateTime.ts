const datePartsRegExp =
  /(?<date>\d\d\d\d-\d\d-\d\d)T(?<hoursMinutesSeconds>\d\d:\d\d:\d\d)/;

/**
 * Matches strings that start with a date stamp like "[2025-01-01 01:23:45", as
 * produced by wrapping getFormattedDateTime output in square brackets.
 *
 * (Note the lack of trailing square bracket since serverLog can include URL
 * path after the timestamp but before the closing square bracket).
 */
export const startsWithDateStampRegExp = /^\[\d\d\d\d-\d\d-\d\d \d\d:\d\d:\d\d/;

/**
 * Returns the current UTC date and time formatted like "2025-01-01 01:23:45".
 */
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

export default getFormattedDateTime;
