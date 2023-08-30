/**
 *
 * Given status code, description and url; console out the error message
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
