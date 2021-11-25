import type { ScryCard, ScryDataItem } from '@/tools/scryfall/types';

type Parse = (data: ScryDataItem) => ScryCard;

/**
 * Sanitize Scryfall response body to have lighter payload during server-side
 * rendering.
 */
export const parse: Parse = (data: ScryDataItem) => {
  const { art_crop: art = null, border_crop: full = null } =
    data.image_uris || {};
  return {
    artist: data.artist,
    images: { art, full },
    name: data.name,
    setCode: data.set,
    setName: data.set_name,
  };
};
