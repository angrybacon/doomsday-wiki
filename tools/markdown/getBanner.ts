import { type Banner } from '@/tools/markdown/types';
import { readFaces } from '@/tools/scryfall/read';
import { scry } from '@/tools/scryfall/scry';

/** Fetch the artwork for a given Scryfall query */
export const getBanner = async (query: string): Promise<Banner> => {
  const data = await scry(query);
  const [face] = await readFaces(data, { withPreview: true });
  if (!face) {
    throw new Error(`Missing data for banner with query "${query}"`);
  }
  const { artist, flavor, images, name } = face;
  const { art, artPreview } = images || {};
  if (!art || !artPreview) {
    throw new Error(`Missing card art for banner "${name}"`);
  }
  return {
    art,
    artPreview,
    flavor,
    // TODO Pass down name and artist separately
    title: `"${name}" by ${artist}`,
  };
};
