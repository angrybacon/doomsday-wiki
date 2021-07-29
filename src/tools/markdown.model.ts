export interface Article {
  path: string;
  pathTokens: string[];
  title?: string;
}

export interface Markdown {
  content: string;
}

export type GetArticles = () => Promise<Article[]>;

export type GetMarkdown = (...slugs: string[]) => Markdown;
