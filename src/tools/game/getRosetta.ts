import { CARDS } from '@/tools/game/constants/Cards';
import type { Category } from '@/tools/markdown/constants/Category';

export type Rosetta = [notation: string, name: string][];

export const getRosetta = (category: string | undefined): Rosetta =>
  Object.entries(CARDS).reduce<Rosetta>((accumulator, [notation, card]) => {
    const [name, categories] = card;
    if (!categories.length || categories.includes(category as Category)) {
      accumulator.push([notation, name]);
    }
    return accumulator;
  }, []);
