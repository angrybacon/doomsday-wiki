import type { Toc } from '@/tools/markdown/types';

export const findHeadings = (root: Toc[]) => {
  const results: { node: HTMLElement | null; url: string }[] = [];
  root.forEach(({ items, url }) => {
    if (url) results.push({ node: document.querySelector(url), url });
    results.push(...findHeadings(items ?? []));
  });
  return results;
};
