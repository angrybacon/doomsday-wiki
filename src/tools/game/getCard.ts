import { CARDS } from '@/tools/game/constants/Cards';
import { type Category } from '@/tools/markdown/constants/Category';

export const getCard = (
  key: string,
): { name: string; categories: Category[] } => {
  const match = CARDS[key] || [];
  return { name: match[0] || key, categories: match[1] || [] };
};
