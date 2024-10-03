const MANA = '[WUBRG]';

const PAIRS = [
  '(?:WU)',
  '(?:UB)',
  '(?:BR)',
  '(?:RG)',
  '(?:GW)',
  '(?:WB)',
  '(?:UR)',
  '(?:BG)',
  '(?:RW)',
  '(?:GU)',
].join('|');

const COLORLESS = '[0-9]|1[0-9]|20|C|X|Y|Z';

/**
 * Regular expression to match mana symbols.
 * For more details about the syntax, see <https://github.com/andrewgioia/mana>.
 */
export const MANA_RE = new RegExp(
  `{(S|(?:${MANA}P?)|(?:2?${MANA})|${PAIRS}|${COLORLESS})}`,
  'g',
);
