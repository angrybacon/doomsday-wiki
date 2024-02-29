export interface Entry {
  kind: Kind | null;
  headings: string[];
  title: string;
}

export enum Kind {
  ARTICLE,
  PRIMER,
  REPORT,
}
