import { existsSync } from 'node:fs';
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

/** Directory where generated LQIP placeholders are written as static files */
const directory = () => join(process.cwd(), 'public', 'lqip');

/** Match a `data:image/<extension>;base64,<data>` URI */
const DATA_URI_RE = /^data:image\/(\w+);base64,(.+)$/u;

type Lqip = { art: string; card: string };

const persist = async (id: string, kind: 'art' | 'card', uri: string) => {
  const match = DATA_URI_RE.exec(uri);
  if (!match) throw new Error(`Malformed LQIP data URI for "${id}"`);
  const [, extension, data] = match;
  const name = `${id}.${kind}.${extension}`;
  const path = join(directory(), name);
  if (!existsSync(path)) await writeFile(path, Buffer.from(data!, 'base64'));
  return `/lqip/${name}`;
};

/**
 * Write a card's LQIP data URIs to `public/lqip` and return the paths.
 *
 * This lets every page reference the same card's placeholder by a stable,
 * cacheable URL instead of duplicating the base64 blob inline on every page
 * that mentions the card.
 */
export const lqip = async (id: string, uris: Lqip) => {
  await mkdir(directory(), { recursive: true });
  const [art, card] = await Promise.all([
    persist(id, 'art', uris.art),
    persist(id, 'card', uris.card),
  ]);
  return { art, card };
};
