/** Convenience typing to represent a successful data yield. */
export type ScryData = ScryDataItem | ScryDataList;

type ScryDataItemImages = {
  art_crop: string;
  border_crop: string;
  large: string;
  normal: string;
  png: string;
};

/**
 * Type as best as possible the card response we get from Scryfall API.
 * See <https://scryfall.com/docs/api/cards>.
 */
export type ScryDataItem = {
  artist: string;
  card_faces?: {
    image_uris: ScryDataItemImages;
    name: string;
    object: 'card_face';
  }[];
  flavor_text?: string;
  image_uris?: ScryDataItemImages;
  name: string;
  object: 'card';
  set: string;
  set_name: string;
  [key: string]: unknown;
};

/**
 * Type representing Scryfall response when the yield is a list of cards.
 * See <https://scryfall.com/docs/api/lists>.
 */
export type ScryDataList = {
  data: ScryDataItem[];
  has_more: boolean;
  object: 'list';
  next_page: URL | null;
  total_cards: number | null;
  warnings: string[] | null;
};

/** Sanitized Scryfall data for a single card. */
export type ScryCard = {
  artist: string;
  flavor: string | null;
  images: {
    art: string | null;
    /** Preview image as a Data URL. */
    artPreview: string | null;
    full: string | null;
  };
  name: string;
  setCode: string;
  setName: string;
};

/** Dictionary of Scryfall request settlements. */
export type Scries = Record<string, ScryCard[]>;
