export interface Entry {
  kind: Kind | null;
  headings: string[];
  title: string;
}

export const KINDS = {
  article: 'ARTICLE',
  primer: 'PRIMER',
  report: 'REPORT',
} as const;

export type Kind = (typeof KINDS)[keyof typeof KINDS];
