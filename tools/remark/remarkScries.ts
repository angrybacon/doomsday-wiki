import type { ReadPlugin } from '@korumite/kiwi';
import type { ScrySingleResponse } from '@korumite/scrydrop';

import { toString } from 'mdast-util-to-string';
import { visit } from 'unist-util-visit';

import { scry } from '~/tools/scryfall/scry';

/**
 * How many scry calls a single page may have in flight at once.
 *
 * This does not meaningfully speed up a page's processing: LQIP generation is
 * CPU-bound work that blocks Node so N queries still take roughly N times as
 * long. This only bounds how many outbound connections to Scryfall's image CDN,
 * are pending at once across Next parallel build workers.
 */
const CONCURRENCY = 8;

/** Match a `|` separator with no padding */
const UNPADDED_PIPE_RE = /\S\||\|\S/u;

/** Throw a clear build error if INPUT doesn't match `NAME | SET | NUMBER` */
const validate = (query: string) => {
  if (query !== query.trim()) {
    throw new Error('Query must not have any leading or trailing spaces');
  }
  if (!query) {
    throw new Error('Query must not be empty');
  }
  if (UNPADDED_PIPE_RE.test(query) || query.includes('  ')) {
    throw new Error(`Query "${query}" must pad "|" with exactly one space`);
  }
  const [, set] = query.split('|').map((it) => it.trim());
  if (set && set !== set.toUpperCase()) {
    throw new Error(`Query "${query}" must use an uppercase set code`);
  }
  return query;
};

/** Run F over ITEMS, keeping at most CONCURRENCY calls in flight at once */
const batch = async <T>(
  items: T[],
  f: (item: T) => Promise<unknown>,
): Promise<void> => {
  let index = 0;
  const workers = Array.from(
    { length: Math.min(CONCURRENCY, items.length) },
    async () => {
      while (index < items.length) {
        // oxlint-disable-next-line eslint/no-await-in-loop
        await f(items[index++]!);
      }
    },
  );
  await Promise.all(workers);
};

/**
 * Find card names and augment the tree with the corresponding Scryfall data.
 *
 * Look for directives where cards are referred by name and make a Scryfall
 * dictionary of queries under the `scries` property for further reference.
 *
 * - `card` from its child text node
 * - `row` from its children text nodes
 */
export const remarkScries: ReadPlugin = () => async (tree, file) => {
  const scries: Record<string, ScrySingleResponse> = {};
  const queries: string[] = [];

  visit(
    tree,
    [
      { name: 'card', type: 'textDirective' },
      { name: 'row', type: 'containerDirective' },
    ],
    (node) => {
      if (node.type === 'textDirective' && node.name === 'card') {
        queries.push(validate(toString(node)));
      } else if (node.type === 'containerDirective' && node.name === 'row') {
        const lines = toString(node).split('\n');
        queries.push(...lines.map((it) => validate(it)));
      }
    },
  );

  await batch(
    queries,
    async (query) => (scries[query] = await scry(query, { lqip: true })),
  );

  file.data.scries = scries;
};
