import type { Banner } from '@/tools/markdown/types';
import { readFirstFace } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { ScryData } from '@/tools/scryfall/types';

type GetBanner = (query: string) => Promise<Banner>;

/** Fetch the artwork for a given Scryfall query. */
export const getBanner: GetBanner = async (query) => {
  const data: ScryData = await scry(query);
  const { artist, images, name } = readFirstFace(data);
  const { art } = images;
  if (!art) {
    throw new Error(`Missing card art for banner "${name}"`);
  }
  return { art, title: `"${name}" by ${artist}` };
};
