import { Category } from '@/tools/markdown/constants/Category';
import type { Kind } from '@/tools/markdown/constants/Kind';
import type { Tag } from '@/tools/markdown/constants/Tag';
import type { Scries } from '@/tools/scryfall/types';

export interface Banner {
  art: string;
  title: string;
}

export interface Chapter extends Document {
  category: Category;
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
  kind: Kind;
  order?: number;
  tags?: Tag[];
  title: string;
}

export type Menu = MenuEntry[];

export interface MenuDecoration {
  category: Category;
  icon: string;
  subtitle: string;
  title: string;
}

export interface MenuEntry extends MenuDecoration {
  pages: Chapter[];
}

export type Partials = Record<string, Markdown>;
