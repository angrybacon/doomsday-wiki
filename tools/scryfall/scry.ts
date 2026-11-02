import type { ScrySingleResponse } from '@korumite/scrydrop';
import type { ScrySingleResponseSlim } from '~/tools/scryfall/slim';

import { Scry } from '@korumite/scrydrop';

import { translate } from '~/tools/rosetta/translate';
import { lqip } from '~/tools/scryfall/lqip';
import { slim } from '~/tools/scryfall/slim';

const NEWLINE_RE = /\r?\n/gu;

const { single } = Scry({
  host: 'http://localhost',
  port: '3333',
  user: `doomsday-wiki/${process.env.NEXT_PUBLIC_VERSION}`,
});

export async function scry(
  query: string,
  options: { full: true; lqip?: boolean },
): Promise<ScrySingleResponse>;

export async function scry(
  query: string,
  options: { full?: false; lqip?: boolean },
): Promise<ScrySingleResponseSlim>;

export async function scry(
  query: string,
  { full, ...options }: { full?: boolean; lqip?: boolean },
) {
  const [name, set, number] = translate(query.replaceAll(NEWLINE_RE, ' '))
    .name.split('|')
    .map((it) => it.trim());
  const normalized = [name, set?.toLowerCase(), number]
    .filter((it) => it !== undefined)
    .join(' | ');
  const faces = await single(normalized, { ...options, mode: 'bulk' });
  if (options.lqip) {
    await Promise.all(
      faces.map(async (face) => {
        face.lqip = face.lqip ? await lqip(face.id, face.lqip) : undefined;
      }),
    );
  }
  return full ? faces : slim(faces);
}
