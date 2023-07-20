import type { ScryCard, ScryDataItem } from '@/tools/scryfall/types';
import { getPlaiceholder } from 'plaiceholder';
import sharp from 'sharp';

/** Fetch the provided image and crop it to use it as thumbnail. */
const makeThumbnail = async (url: string): Promise<string> => {
  const response = await fetch(url);
  const buffer = Buffer.from(await response.arrayBuffer());
  const image = sharp(buffer);
  const { height, width } = await image.metadata();
  if (!height || !width) {
    throw new Error(`Could not read dimensions for thumbnail at "${url}"`);
  }
  const crop = await image
    .extract({
      height: Math.trunc(height * 0.45),
      left: Math.trunc(width * 0.1),
      top: Math.trunc(height * 0.11),
      width: Math.trunc(width * 0.8),
    })
    .toBuffer();
  const { base64 } = await getPlaiceholder(crop, { size: 64 });
  return base64;
};

/**
 * Sanitize Scryfall response body to have lighter payload during server-side
 * rendering.
 */
export const parse = async (options: {
  data: ScryDataItem;
  withThumbnail: boolean;
}): Promise<ScryCard> => {
  const { data, withThumbnail } = options;
  const {
    art_crop: art = null,
    border_crop: full = null,
    small = null,
  } = data.image_uris || {};
  let artThumbnail: string | null = null;
  if (withThumbnail && small) {
    try {
      artThumbnail = await makeThumbnail(small);
    } catch (error) {
      const message = error instanceof Error ? error.message : `${error}`;
      throw new Error(`${message} for "${small}"`);
    }
  }
  return {
    artist: data.artist,
    flavor: data.flavor_text ?? null,
    images: { art, artThumbnail, full },
    name: data.name,
    setCode: data.set,
    setName: data.set_name,
  };
};
