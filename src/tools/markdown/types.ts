import { GrayMatterFile } from 'gray-matter';

export interface Article {
  route: string;
  segments: string[];
  data?: GrayMatterFile<string>['data'];
}

export type Chapter = 'appendices' | 'ddeft' | 'meandeck' | 'ddft';

export type ChapterEntry = ChapterMeta & {
  pages: ChapterPage[];
};

export interface ChapterMeta {
  icon?: string;
  subtitle?: string;
  title: string;
}

export interface ChapterPage {
  route: string;
  title: string;
}

export interface Markdown {
  content: string;
  data?: GrayMatterFile<string>['data'];
}

export interface WithChapters {
  chapters: ChapterEntry[];
}
