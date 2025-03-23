import { type Toc } from '@/tools/markdown/types';

export const findHeadings = (items: Toc[]) => {
  const results: { node: HTMLElement | null; url: string }[] = [];
  items.forEach((item) => {
    if (item.url) {
      results.push({
        node: document.getElementById(item.url.substring(1)),
        url: item.url,
      });
    }
    results.push(...findHeadings(item.items || []));
  });
  return results;
};
