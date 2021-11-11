import type { AxiosResponse } from 'axios';

enum ScryObject {
  CARD = 'card',
  CARD_FACE = 'card_face',
  LIST = 'list',
}

/**
 * Type as best as possible the card response we get from Scryfall API.
 * See https://scryfall.com/docs/api/cards
 */
export interface ScryDataItem {
  artist: string;
  card_faces?: (Partial<ScryDataItem> & { object: ScryObject.CARD_FACE })[];
  image_uris?: {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
  };
  name: string;
  object: ScryObject.CARD;
  set: string;
  set_name: string;
}

/**
 * Type representing Scryfall response when the yield is a list.
 * See https://scryfall.com/docs/api/lists
 */
export interface ScryDataList {
  data: ScryDataItem[];
  has_more: boolean;
  object: ScryObject.LIST;
  next_page: URL | null;
  total_cards: number | null;
  warnings: string[] | null;
}

/**
 * Scryfall API response in case of error.
 * See https://scryfall.com/docs/api/errors
 */
export interface ScryError {
  code: string;
  details: string;
  status: number;
  type: string | null;
  warnings: string[] | null;
}

/** Dictionary of Scry results. */
export type Scries = Record<string, ScryDataItem>;

/** Convenience typing to refer to responses from the Scryfall API. */
export type ScryResponse = AxiosResponse<ScryDataItem | ScryDataList>;
