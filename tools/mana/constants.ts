type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Generic = `${Digit}` | `1${Digit}` | '20' | 'C' | 'S' | 'X' | 'Y' | 'Z';
type HybridAllied = 'WU' | 'UB' | 'BR' | 'RG' | 'GW';
type HybridColorless = `${'2' | 'C'}${Unique}`;
type HybridEnemy = 'WB' | 'UR' | 'BG' | 'RW' | 'GU';
type HybridPhyrexian = `${Unique}P`;
type Unique = 'W' | 'U' | 'B' | 'R' | 'G';

export type Pattern =
  | Generic
  | HybridAllied
  | HybridColorless
  | HybridEnemy
  | HybridPhyrexian
  | Unique;

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

const COLORLESS = '[0-9]|1[0-9]|20|C|S|X|Y|Z';

/**
 * Regular expression to match mana symbols.
 * For more details about the syntax, see <https://github.com/andrewgioia/mana>.
 */
export const MANA_RE = new RegExp(
  `{((?:${MANA}P?)|(?:(?:2|C)?${MANA})|${PAIRS}|${COLORLESS})}`,
  'g',
);
