import { CARDS } from '@/tools/game/constants/Cards';
import type { Category } from '@/tools/markdown/constants/Category';

type GetCard = (key: string) => { name: string; categories: Category[] };

export const getCard: GetCard = (key) => {
  const match = CARDS[key] || [];
  return { name: match[0] || key, categories: match[1] || [] };
};
