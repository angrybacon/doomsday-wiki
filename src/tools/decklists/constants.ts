import { join } from 'path';

/** File extension to consider for decklist files. */
export const DECKLISTS_EXTENSION = '.txt';

/** Base URL for decklists. */
export const BASE_DECKLISTS_URL = join(process.cwd(), 'decklists');

/** Collection of regular expression used to parse a decklist file. */
export const DECK_RE: Record<string, RegExp> = {
  card: /(\d+) +(.+)\b */,
  decklist:
    /\n*((?:\/\/.*\n+)+)?\n*((?:[^/].+\n*)+)\n*(?:\/\/ Sideboard\n+((?:.+\n*)+)\n*)?/,
  groupDelimiter: /\s*\n\s*\n\s*/,
  header: /(?:\/\/ Title: +(\b.*\b)).*(?:\n+\/\/ Authors: +(\b.*\b))?/,
  line: /\d+[^\n]+/g,
};
