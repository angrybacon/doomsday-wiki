import { GrayMatterFile } from 'gray-matter';

export interface Article {
  route: string;
  segments: string[];
  data?: GrayMatterFile<string>['data'];
}

export interface Markdown {
  content: string;
  data?: GrayMatterFile<string>['data'];
}
