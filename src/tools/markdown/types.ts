import { Category } from '@/tools/markdown/constants/Category';
import { type Kind } from '@/tools/markdown/constants/Kind';
import { type Tag } from '@/tools/markdown/constants/Tag';
import { type Scries } from '@/tools/scryfall/types';

export type Banner = {
  art: string;
  artPreview: string;
  flavor: string | null;
  title: string;
};

// Cards ///////////////////////////////////////////////////////////////////////

type Card<M> = {
  matter: M;
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
  category: Category;
};

// Documents ///////////////////////////////////////////////////////////////////

export type Partial = {
  partials: Partials;
  scries: Scries;
  text: string;
};

export type Article = Partial & {
  banner: Banner;
  matter: ArticleMatter;
  minutes: number;
};

export type Chapter = Partial & {
  banner: Banner;
  matter: ChapterMatter;
};

export type Partials = Record<string, Partial>;

// Matter //////////////////////////////////////////////////////////////////////

export type ArticleMatter = {
  authors: string;
  banner: string;
  kind: Kind;
  tags: Tag[];
  title: string;
};

export type ChapterMatter = {
  banner: string;
  order: number | null;
  title: string;
};

// Menu ////////////////////////////////////////////////////////////////////////

export type MenuDecoration = {
  category: Category;
  subtitle: string;
  title: string;
};

export type MenuEntry = MenuDecoration & {
  pages: ChapterCard[];
};
