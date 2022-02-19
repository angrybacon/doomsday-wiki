export type Card = [quantity: number, name: string];

export interface Decklist {
  authors: string | null;
  colors: string[] | null;
  main: Card[][];
  mainCount: number;
  side: Card[][];
  sideCount: number;
  title: string | null;
}

export interface DecklistExtra {
  date: null | string;
  titleAsFile: string;
}

export type Decklists = Record<string, Decklist & DecklistExtra>;
