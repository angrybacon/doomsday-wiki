import axios, { AxiosResponse } from 'axios';
import { HttpStatusCode } from '@/constants/HttpStatusCode';

/**
 * Cache to hold subsequent search queries.
 * The content can either be a resolved or rejected promise, or a pending
 * promise.
 */
const CACHE: Record<string, AxiosResponse | Promise<AxiosResponse>> = {};

/** Endpoint to query for a card name and optional set. */
const SCRYFALL_API = 'https://api.scryfall.com/cards/named';

type Search = (key: string, set?: string) => Promise<AxiosResponse>;

/**
 * Query api.scryfall.com for `name` in `set`.
 * Build a cache to avoid querying twice for the same name and set pair.
 */
export const search: Search = (name, set = '') =>
  new Promise<AxiosResponse>((resolve, reject) => {
    const key = `${name}/${set}`;
    if (CACHE[key]) {
      if (
        (CACHE[key] as AxiosResponse).status === undefined ||
        (CACHE[key] as AxiosResponse).status === HttpStatusCode.OK
      ) {
        return resolve(CACHE[key]);
      }
      return reject(CACHE[key]);
    }
    CACHE[key] = axios.get(`${SCRYFALL_API}?exact=${name}&set=${set}`);
    return (CACHE[key] as Promise<AxiosResponse>).then(
      (response) => {
        CACHE[key] = response;
        return resolve(response);
      },
      (error) => {
        CACHE[key] = error.response;
        return reject(error.response);
      }
    );
  });
