import { Scry } from '@korumite/scrydrop';

import { translate } from '@/tools/rosetta/translate';

const { single } = Scry({ host: 'http://localhost', port: '3333' });

export const scry: typeof single = (query, ...parameters) =>
  single(translate(query).name, ...parameters);
