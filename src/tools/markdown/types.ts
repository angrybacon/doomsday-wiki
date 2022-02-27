import type { Kind } from '@/tools/markdown/constants/Kind';
import type { Scries } from '@/tools/scryfall/types';

export interface Banner {
  art: string;
  title: string;
}

export interface Category {
  icon?: string;
  id?: CategoryId;
  subtitle?: string;
  title: string;
}

// TODO Prefer an enum
export type CategoryId = 'appendices' | 'ddeft' | 'ddft' | 'meandeck';

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
  title: string;
}

export type Menu = (Category & { pages: Document[] })[];

export type Partials = Record<string, Markdown>;
