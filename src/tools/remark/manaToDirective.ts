const MANA = '[WUBRG]';

// prettier-ignore
const PAIRS = [
  '(?:WU)', '(?:WB)', '(?:UB)', '(?:UR)', '(?:BR)',
  '(?:BG)', '(?:RG)', '(?:RW)', '(?:GW)', '(?:GU)',
].join('|');

const COLORLESS = '[0-9]|1[0-9]|20|C|X|Y|Z';

/**
 * Regular expression to match mana symbols.
 * For more details about the syntax, see https://github.com/andrewgioia/mana .
 */
const MANA_RE = new RegExp(
  `{(S|(?:${MANA}P?)|(?:2?${MANA})|${PAIRS}|${COLORLESS})}`,
  'g'
);

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const manaToDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
