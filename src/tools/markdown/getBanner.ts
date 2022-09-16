import type { Banner } from '@/tools/markdown/types';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { ScryCard, ScryData } from '@/tools/scryfall/types';

type GetBanner = (query: string) => Promise<Banner>;

/** Fetch the artwork for a given Scryfall query. */
export const getBanner: GetBanner = async (query) => {
  const data: ScryData = await scry(query);
  const faces: ScryCard[] = readFaces(data);
  const { artist, images, name } = faces[0] || {};
  const { art } = images || {};
  if (!art) {
    throw new Error(`Missing card art for banner "${name}"`);
  }
  return { art, title: `"${name}" by ${artist}` };
};
