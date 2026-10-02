import { Scry } from '@korumite/scrydrop';

import { translate } from '~/tools/rosetta/translate';
import { lqip } from '~/tools/scryfall/lqip';

const NEWLINE_RE = /\r?\n/gu;

const { single } = Scry({
  host: 'http://localhost',
  port: '3333',
  user: `doomsday-wiki/${process.env.NEXT_PUBLIC_VERSION}`,
});

export const scry = async (
  query: string,
  options: { lqip?: boolean },
): ReturnType<typeof single> => {
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
  return faces;
};
