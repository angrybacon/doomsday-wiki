export type Banner = {
  art: string;
  flavor: string | null;
  label: string;
  lqip: string;
  title: string;
};

export type Toc = {
  items?: Toc[];
  title?: string;
  url?: string;
};
