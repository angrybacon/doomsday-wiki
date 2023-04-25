import type { ScryCard, ScryDataItem } from '@/tools/scryfall/types';

/**
 * Sanitize Scryfall response body to have lighter payload during server-side
 * rendering.
 */
export const parse = (data: ScryDataItem): ScryCard => {
  const { art_crop: art = null, border_crop: full = null } =
    data.image_uris || {};
  return {
    artist: data.artist,
    flavor: data.flavor_text ?? null,
    images: { art, full },
    name: data.name,
    setCode: data.set,
    setName: data.set_name,
  };
};
