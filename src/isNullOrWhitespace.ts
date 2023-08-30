/**
 * Returns true if string is null, an empty string, or a string of whitespace
 * characters.
 *
 * @public
 */
const isNullOrWhitespace = (input: string) => {
  if (typeof input === "string") {
    return !input || !input.trim();
  }
  return true;
};

export default isNullOrWhitespace;
