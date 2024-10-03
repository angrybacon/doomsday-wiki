/** Collection of regular expression used to parse a decklist file. */
export const DECK_RE = {
  card: /(\d+) +(.+)\b */,
  decklist:
    /\n*((?:\/\/.*\n+)+)?\n*((?:[^/].+\n*)+)\n*(?:\/\/ Sideboard\n+((?:.+\n*)+)\n*)?/,
  groupDelimiter: /\s*\n\s*\n\s*/,
  header:
    /(?:\/\/ Title: +(.+))(?:\n+\/\/ Authors: +(.+))?(?:\n+\/\/ Colors: +(.+))?/,
  line: /\d+[^\n]+/g,
} as const;
