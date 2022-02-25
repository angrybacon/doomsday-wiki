import type { Scries } from '@/tools/scryfall/types';

export interface Banner {
  art: string;
  title: string;
}

export type Category = 'appendices' | 'ddeft' | 'meandeck' | 'ddft';

export interface CategoryMeta {
  icon?: string;
  id?: Category;
  subtitle?: string;
  title: string;
}

export interface Document {
  crumbs: string[];
  matter: Matter;
  route: string;
  slug: string;
}

export interface Markdown {
  matter: Partial<Matter>;
  scries: Scries;
  text: string;
}

export interface Matter {
  authors?: string;
  banner?: string;
  bannerData?: Banner;
  date: string | null;
  order?: number;
  title: string;
}

export type Menu = (CategoryMeta & { pages: Document[] })[];

export type Partials = Record<string, Markdown>;
