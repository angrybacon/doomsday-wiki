import 'unist';

import { Decklist, DecklistExtra, Decklists } from '@/tools/decklists/types';
import { Partial } from '@/tools/markdown/types';
import { ScryCard } from '@/tools/scryfall/types';

declare module 'unist' {
  interface Data {
    hName?: string;
    hProperties?: {
      cards?: { data: ScryCard[]; id: string }[];
      decklist?: Decklist & DecklistExtra;
      decklists?: Decklists;
      name?: string;
      partial?: Partial;
      pattern?: string;
    };
  }
}
