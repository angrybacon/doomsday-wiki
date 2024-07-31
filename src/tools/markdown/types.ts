import { type Decklists } from '@/tools/decklists/types';
import {
  type CATEGORIES,
  type KINDS,
  type TAGS,
} from '@/tools/markdown/constants';
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

export type ChapterCard = Card<ChapterMatter> & {
  category: (typeof CATEGORIES)[number];
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
  matter: ChapterMatter;
};

// Matter //////////////////////////////////////////////////////////////////////

export type ArticleMatter = {
  authors: string;
  banner: string;
  kind: (typeof KINDS)[number];
  tags: (typeof TAGS)[number][];
  title: string;
};

export type ChapterMatter = {
  banner: string;
  order?: number;
  title: string;
};

// Menu ////////////////////////////////////////////////////////////////////////

export type MenuDecoration = {
  category: (typeof CATEGORIES)[number];
  subtitle: string;
  title: string;
};

export type MenuEntry = MenuDecoration & {
  pages: ChapterCard[];
};
