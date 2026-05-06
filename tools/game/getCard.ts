import { CARDS } from '@/tools/game/constants/Cards';
import { type Category } from '@/tools/markdown/schemas';

export const getCard = (
  key: string,
): { name: string; categories: Category[] } => {
  const [name = key, categories = []] = CARDS[key] || [];
  return { name, categories };
};
