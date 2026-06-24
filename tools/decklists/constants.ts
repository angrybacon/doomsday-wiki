/** Collection of regular expression used to parse a decklist file */
export const DECK_RE = {
  card: /(\d+) +(.+)\b */u,
  decklist:
    /\n*((?:\/\/.*\n+)+)?\n*((?:[^/].+\n*)+)\n*(?:\/\/ Sideboard\n+((?:.+\n*)+)\n*)?/u,
  groupDelimiter: /\s*\n\s*\n\s*/u,
  header:
    /(?:\/\/ Title: +(.+))(?:\n+\/\/ Authors: +(.+))?(?:\n+\/\/ Colors: +(.+))?/u,
  line: /\d+[^\n]+/gu,
} as const;
