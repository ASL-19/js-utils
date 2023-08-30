/**
 * Logs a formatted error based on the provided description, HTTP status code,
 * and URL.
 *
 * @public
 */
const logError = ({
  description,
  statusCode,
  url,
}: {
  description: string;
  statusCode: number;
  url: string;
}) => {
  const message = `[${statusCode} ${url}] ${description ?? "(No description)"}`;

  if (statusCode >= 400 && statusCode < 500 && statusCode !== 404) {
    console.warn(message);
  }

  if (statusCode >= 500 && statusCode < 600) {
    console.error(message);
  }
};

export default logError;
