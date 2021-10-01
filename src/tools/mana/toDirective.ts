import { MANA_RE } from '@/tools/mana/constants';

/** Find mana symbols in `text` and replace them with the directive syntax. */
export const toDirective = (text: string): string => {
  const result = text.replace(MANA_RE, ':mana[$1]');
  return result;
};
