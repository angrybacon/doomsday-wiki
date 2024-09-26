import { type Decklists } from '@/tools/decklists/types';
import { type KINDS, type TAGS } from '@/tools/markdown/constants';
import { type Scries } from '@/tools/scryfall/types';

export type Banner = {
  art: string;
  artPreview: string;
  flavor: string | null;
  title: string;
};

// Cards ///////////////////////////////////////////////////////////////////////

type Card<TMatter> = {
  matter: TMatter;
  route: string;
  slug: string;
};

export type ArticleCard = Card<ArticleMatter> & {
  banner: Banner;
  date: string | null;
  day: string;
  month: string;
  year: string;
};

// Documents ///////////////////////////////////////////////////////////////////

export type Partial = {
  decklists: Decklists;
  matter: Record<string, unknown>;
  minutes: number;
  scries: Scries;
  text: string;
};

export type Article = Omit<Partial, 'matter'> & {
  banner: Banner;
  matter: ArticleMatter;
};

export type Chapter = Omit<Partial, 'matter'> & {
  banner: Banner;
  matter: {
    banner: string;
    title: string;
  };
};

export type ArticleMatter = {
  authors: string;
  banner: string;
  kind: (typeof KINDS)[number];
  tags: (typeof TAGS)[number][];
  title: string;
};
