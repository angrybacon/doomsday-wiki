import { Scry } from '@korumite/scrydrop';

import { translate } from '~/tools/rosetta/translate';

const NEWLINE_RE = /\r?\n/gu;

const { single } = Scry({
  host: 'http://localhost',
  port: '3333',
  user: `doomsday-wiki/${process.env.NEXT_PUBLIC_VERSION}`,
});

export const scry = (
  query: string,
  options: { lqip?: boolean },
): ReturnType<typeof single> => {
  const [name, set, number] = translate(query.replaceAll(NEWLINE_RE, ' '))
    .name.split('|')
    .map((it) => it.trim());
  const normalized = [name, set?.toLowerCase(), number]
    .filter((it) => it !== undefined)
    .join(' | ');
  return single(normalized, { ...options, mode: 'bulk' });
};
