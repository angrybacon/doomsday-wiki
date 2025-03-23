import { type Decklists } from '@/tools/decklists/types';
import { type KINDS, type TAGS } from '@/tools/markdown/constants';
import { type Scries } from '@/tools/scryfall/types';

export type Banner = {
  art: string;
  artPreview: string;
  flavor: string | null;
  title: string;
};

export type Partial = {
  decklists: Decklists;
  file: string;
  minutes: number;
  scries: Scries;
  text: string;
};

type ArticleMatter = {
  authors: string;
  banner: string;
  kind: (typeof KINDS)[number];
  tags: (typeof TAGS)[number][];
  title: string;
};

export type Article = Partial & {
  banner: Banner;
  matter: ArticleMatter;
  toc: Toc;
};

export type ArticleCard = {
  banner: Banner;
  date: string | null;
  href: string;
  matter: ArticleMatter;
};

export type Chapter = Partial & {
  banner: Banner;
  matter: { banner: string; title: string };
  toc: Toc;
};

export type Toc = {
  items?: Toc[];
  title?: string;
  url?: string;
};
