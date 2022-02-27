type FormatDate = (
  year?: string,
  month?: string,
  day?: string
) => null | string;

/**
 * Parse a date out of an array representing the year, month and day in that
 * order.
 * Accept partial dates where day or even month can be omitted.
 * Return a local-formatted string representing the date found. Otherwise return
 * null.
 */
export const formatDate: FormatDate = (year, month, day) => {
  if (!year) return null;
  // NOTE Replace missing parts with the first month or day to still have a
  //      valid date object.
  const date = new Date(
    parseInt(year, 10),
    month ? parseInt(month, 10) - 1 : 0,
    day ? parseInt(day, 10) : 1
  );
  const isCurrentYear = new Date().getFullYear() === parseInt(year, 10);
  return date.toLocaleDateString(undefined, {
    year: isCurrentYear ? undefined : 'numeric',
    ...(month && { month: 'short' }),
    ...(day && { day: 'numeric' }),
  });
};
