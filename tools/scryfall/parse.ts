import { getPlaiceholder } from 'plaiceholder';

import { type ScryCard, type ScryDataItem } from '@/tools/scryfall/types';

/** Make a `plaiceholder` preview for the provided image URL */
const makePreview = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  const { base64 } = await getPlaiceholder(buffer, { size: 32 });
  return base64;
};

/**
 * Sanitize Scryfall response body to have lighter payload during server-side
 * rendering.
 */
export const parse = async (options: {
  data: ScryDataItem;
  withPreview: boolean;
}): Promise<ScryCard> => {
  const { data, withPreview } = options;
  const { art_crop: art = null, border_crop: full = null } =
    data.image_uris || {};
  let artPreview: string | null = null;
  if (withPreview) {
    if (!art) {
      throw new Error(`Missing preview art for "${data.name}"`);
    }
    try {
      artPreview = await makePreview(art);
    } catch (error) {
      const message = error instanceof Error ? error.message : error;
      throw new Error(`${message} for "${art}"`);
    }
  }
  return {
    artist: data.artist,
    flavor: data.flavor_text ?? null,
    images: { art, artPreview, full },
    name: data.name,
    setCode: data.set,
    setName: data.set_name,
  };
};
