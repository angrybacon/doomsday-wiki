import { CARDS } from '@/tools/game/constants/Cards';
import { type CATEGORIES } from '@/tools/markdown/constants';

export const getCard = (
  key: string,
): { name: string; categories: (typeof CATEGORIES)[number][] } => {
  const [name = key, categories = []] = CARDS[key] || [];
  return { name, categories };
};
