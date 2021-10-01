import axios from 'axios';
import { HttpStatusCode } from '@/constants/HttpStatusCode';
import { SETS, SHORTHANDS } from '@/tools/scryfall/cards';
import type { ScryResponse } from '@/tools/scryfall/types';

type Cache = Record<string, ScryResponse | Promise<ScryResponse>>;

/**
 * Cache to hold concurrent search queries.
 * The content can either be a resolved or rejected promise, or a pending
 * promise.
 */
const CACHE: { named: Cache; search: Cache } = {
  named: {},
  search: {},
};

/** Endpoints to query for a card name. */
enum Api {
  NAMED = 'https://api.scryfall.com/cards/named',
  SEARCH = 'https://api.scryfall.com/cards/search',
}

/**
 * Return a tuple representing the Scryfall configuration to use depending on
 * whether the query is ambiguous or definite.
 */
const getApi = (name: string, set?: string): [Cache, Api, string] =>
  set
    ? // NOTE If a set is specified, the search will not be ambiguous
      [CACHE.named, Api.NAMED, `exact=${name}&set=${set}`]
    : // NOTE Else, use the standard search and consider the first result only
      [
        CACHE.search,
        Api.SEARCH,
        `q=!"${name}"&unique=prints&order=released&dir=asc`,
      ];

type Scry = (query: string) => Promise<ScryResponse>;

/**
 * Query Scryfall with `query`.
 *
 * It consists of a card name and an optionnal set separated by a `|`.
 *
 * This asynchronous function builds a cache of concurrent promises to avoid
 * querying twice for the same name and set pair.
 */
export const scry: Scry = (query) =>
  new Promise<ScryResponse>((resolve, reject) => {
    const [name, set] = query.split('|').map((it) => it.trim());
    const realName = SHORTHANDS[name] || name;
    const realSet = set || SETS[realName];
    const [cache, api, parameters] = getApi(realName, realSet);
    const key = `${realName}/${realSet}`;
    if (cache[key]) {
      const response = cache[key] as ScryResponse;
      if (
        // NOTE The request is still pending
        response.status === undefined ||
        // NOTE The request has already resolved
        response.status === HttpStatusCode.OK
      ) {
        return resolve(response);
      }
      return reject(cache[key]);
    }
    const path = `${api}?${parameters}`;
    console.info(`[scryfall] GET ${path}`);
    cache[key] = axios.get(path);
    return (cache[key] as Promise<ScryResponse>).then(
      (response) => {
        cache[key] = response;
        return resolve(response);
      },
      (error) => {
        cache[key] = error.response;
        return reject(error.response);
      }
    );
  });
