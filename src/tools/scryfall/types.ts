import type { AxiosResponse } from 'axios';

/** Dictionary of Scry results. */
export type Scries = Record<string, ScryDataItem>;

/** Type as best as possible the card response we get from Scryfall API. */
export interface ScryDataItem {
  /* eslint-disable camelcase */
  artist?: string;
  card_faces?: (Partial<ScryDataItem> & { object: 'card_face' })[];
  image_uris?: {
    art_crop: string;
    border_crop: string;
    large: string;
    normal: string;
    png: string;
    small: string;
  };
  name: string;
  object: 'card';
  /* eslint-enable camelcase */
}

/** Type representing Scryfall response when the yield is a list. */
export interface ScryDataList {
  /* eslint-disable camelcase */
  data: ScryDataItem[];
  has_more: boolean;
  object: 'list';
  total_cards: number;
  /* eslint-enable camelcase */
}

/** Convenience typing to refer to responses from the Scryfall API. */
export type ScryResponse = AxiosResponse<ScryDataItem | ScryDataList>;
