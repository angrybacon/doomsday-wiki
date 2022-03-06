import type { Banner } from '@/tools/markdown/types';
import { readFirstFace } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';
import type { ScryData } from '@/tools/scryfall/types';

/** Fetch the artwork for a given Scryfall query. */
export const getBanner = async (query: string): Promise<Banner> => {
  const data: ScryData = await scry(query);
  const { artist, images, name } = readFirstFace(data);
  const { art } = images;
  if (!art) {
    throw new Error(`Missing card art for banner "${name}"`);
  }
  return { art, title: `"${name}" by ${artist}` };
};