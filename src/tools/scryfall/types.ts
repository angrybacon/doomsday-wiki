import { AxiosResponse } from 'axios';

// TODO Add a type for array-like Scryfall response

/** Type as best as possible the card response we get from Scryfall API. */
export interface ScryData {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/** Dictionary of Scry results. */
export type Scries = Record<string, ScryData>;

/** Convenience typing to refer to responses from the Scryfall API. */
export type ScryResponse = AxiosResponse<ScryData>;
