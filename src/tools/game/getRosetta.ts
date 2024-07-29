import { CARDS } from '@/tools/game/constants/Cards';

export type Rosetta = [notation: string, name: string][];

export const getRosetta = (category: string | undefined): Rosetta =>
  Object.entries(CARDS).reduce<Rosetta>((accumulator, [notation, card]) => {
    const [name, categories] = card;
    if (
      !categories.length ||
      (category && (categories as string[]).includes(category.toUpperCase()))
    ) {
      accumulator.push([notation, name]);
    }
    return accumulator;
  }, []);
