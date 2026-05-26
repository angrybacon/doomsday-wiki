import { type Toc } from '@/tools/markdown/types';

export const findHeadings = (items: Toc[]) => {
  const results: { node: HTMLElement | null; url: string }[] = [];
  items.forEach(({ items, url }) => {
    if (url) results.push({ node: document.querySelector(url), url });
    results.push(...findHeadings(items ?? []));
  });
  return results;
};
