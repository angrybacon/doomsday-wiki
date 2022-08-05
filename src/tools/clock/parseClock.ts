const RE =
  /it is(?: still)? (\d+(?: and a half)? (?:minute|second)s?) to midnight/i;

type ParseClock = (text: string) => string | undefined;

/**
 * Extract the time substring from a Doomsday clock headline.
 * See https://thebulletin.org/doomsday-clock/timeline/ for the possible values.
 */
export const parseClock: ParseClock = (text) => {
  const [, match] = text.match(RE) || [];
  return match?.toLowerCase() || undefined;
};
