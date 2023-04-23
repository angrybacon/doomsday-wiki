import { Category } from '@/tools/markdown/constants/Category';
import type { Kind } from '@/tools/markdown/constants/Kind';
import type { Tag } from '@/tools/markdown/constants/Tag';
import type { Scries } from '@/tools/scryfall/types';

export interface Banner {
  art: string;
  title: string;
}

// Cards ///////////////////////////////////////////////////////////////////////

interface Card<M> {
  matter: M;
  route: string;
  slug: string;
}

export interface ArticleCard extends Card<ArticleMatter> {
  banner: Banner;
  date: string | null;
  day: string;
  month: string;
  year: string;
}

export interface ChapterCard extends Card<ChapterMatter> {
  category: Category;
}

// Documents ///////////////////////////////////////////////////////////////////

export interface Partial {
  partials: Partials;
  scries: Scries;
  text: string;
}

export interface Article extends Partial {
  banner: Banner;
  matter: ArticleMatter;
  minutes: number;
}

export interface Chapter extends Partial {
  matter: ChapterMatter;
}

export type Partials = Record<string, Partial>;

// Matter //////////////////////////////////////////////////////////////////////

export interface ArticleMatter {
  authors: string;
  banner: string;
  kind: Kind;
  tags: Tag[];
  title: string;
}

export interface ChapterMatter {
  order: number | null;
  title: string;
}

// Menu ////////////////////////////////////////////////////////////////////////

export interface MenuDecoration {
  category: Category;
  subtitle: string;
  title: string;
}

export interface MenuEntry extends MenuDecoration {
  pages: ChapterCard[];
}
