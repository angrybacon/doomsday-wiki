import { type ScrySingleResponse } from '@korumite/scrydrop';

import { scry } from '@/tools/scryfall/scry';

/** Fetch the artwork for a given Scryfall query */
export const getBanner = async (query: string) => {
  const [front]: ScrySingleResponse = await scry(query, { lqip: true });
  if (!front) throw new Error(`Missing banner data for "${query}"`);
  if (!front.image_uris)
    throw new Error(`Missing banner imagery for "${query}"`);
  if (!front.lqip) throw new Error(`Missing LQIP for "${query}"`);
  return {
    art: front.image_uris.art_crop,
    flavor: front.flavor_text ?? null,
    label: front.alternate.join('. '),
    lqip: front.lqip.art,
    title: front.alternate.join('\n'),
  };
};
