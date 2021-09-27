export type Card = [quantity: number, name: string];

export interface Decklist {
  author?: string;
  main: Card[][];
  side?: Card[][];
  title?: string;
}

export interface DecklistExtra {
  date: null | string;
  titleAsFile: string;
}

export type Decklists = Record<string, Decklist & DecklistExtra>;
