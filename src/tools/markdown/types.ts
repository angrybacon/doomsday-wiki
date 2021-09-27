import { GrayMatterFile } from 'gray-matter';
import type { ScryData } from '@/tools/scryfall/types';

export type Category = 'appendices' | 'ddeft' | 'meandeck' | 'ddft';

export interface CategoryMeta {
  icon?: string;
  subtitle?: string;
  title: string;
}

export interface Document {
  crumbs: string[];
  data?: GrayMatterFile<string>['data'];
  route: string;
}

export type Menu = (CategoryMeta & { pages: Document[] })[];

export interface Markdown {
  matter?: GrayMatterFile<string>['data'];
  scries: Record<string, ScryData>;
  text: string;
}
