import { GrayMatterFile } from 'gray-matter';
import type { Scries } from '@/tools/scryfall/types';

export type Category = 'appendices' | 'ddeft' | 'meandeck' | 'ddft';

export interface CategoryMeta {
  icon?: string;
  id?: Category;
  subtitle?: string;
  title: string;
}

export interface Document {
  crumbs: string[];
  matter?: GrayMatterFile<string>['data'];
  route: string;
  slug: string;
}

export interface Markdown {
  matter?: GrayMatterFile<string>['data'];
  scries: Scries;
  text: string;
}

export type Menu = (CategoryMeta & { pages: Document[] })[];

export type Partials = Record<string, Markdown>;
