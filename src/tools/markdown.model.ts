import { GrayMatterFile } from 'gray-matter';

export interface Article {
  route: string;
  segments: string[];
  title?: string;
}

export interface Markdown {
  content: string;
  data: GrayMatterFile<string>['data'];
}

export type GetArticles = () => Promise<Article[]>;

export type GetMarkdown = (...slugs: string[]) => Markdown;
