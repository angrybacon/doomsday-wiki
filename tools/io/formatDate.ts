/**
 * Parse a date out of the provided YEAR, MONTH and DAY.
 *
 * Support partial dates where the day or even the month can be omitted.
 * Return a local-formatted string representing the date found or null in case
 * of errors.
 */
export const formatDate = (
  year?: string,
  month?: string,
  day?: string,
): string | null => {
  if (!year) return null;
  // NOTE Replace missing parts with the first month or day to make a valid date
  const date = new Date(
    parseInt(year, 10),
    month ? parseInt(month, 10) - 1 : 0,
    day ? parseInt(day, 10) : 1,
  );
  const isCurrentYear = new Date().getFullYear() === parseInt(year, 10);
  return date.toLocaleDateString(undefined, {
    year: isCurrentYear ? undefined : 'numeric',
    ...(month && { month: 'short' }),
    ...(day && { day: 'numeric' }),
  });
};
