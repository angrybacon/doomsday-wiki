export type Card = [quantity: number, name: string];

export type Decklist = {
  authors: string | null;
  colors: string[] | null;
  main: Card[][];
  mainCount: number;
  side: Card[][];
  sideCount: number;
  title: string | null;
};

export type DecklistExtra = {
  date: null | string;
  titleFromPath: string;
};

export type Decklists = Record<string, Decklist & DecklistExtra>;
