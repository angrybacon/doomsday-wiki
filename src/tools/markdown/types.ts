import { GrayMatterFile } from 'gray-matter';

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
  content: string;
  data?: GrayMatterFile<string>['data'];
}
