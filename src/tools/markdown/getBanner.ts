import type { Banner } from '@/tools/markdown/types';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { ScryCard, ScryData } from '@/tools/scryfall/types';

/** Fetch the artwork for a given Scryfall query. */
export const getBanner = async (query: string): Promise<Banner> => {
  const data: ScryData = await scry(query);
  const faces: ScryCard[] = readFaces(data);
  const { artist, flavor, images, name } = faces[0] || {};
  const { art } = images || {};
  if (!art) {
    throw new Error(`Missing card art for banner "${name}"`);
  }
  // TODO Pass down name and artist separately
  const banner: Banner = { art, flavor, title: `"${name}" by ${artist}` };
  return banner;
};
