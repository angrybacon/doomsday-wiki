import axios, { AxiosResponse } from 'axios';
import { HttpStatusCode } from '@/constants/HttpStatusCode';
import { SETS, SHORTHANDS } from '@/tools/scryfall/cards';

type Cache = Record<string, AxiosResponse | Promise<AxiosResponse>>;

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

type Scry = (key: string, set?: string) => Promise<AxiosResponse>;

/**
 * Query Scryfall for `name` in `set`.
 * Build a cache to avoid querying twice for the same name and set pair.
 */
export const scry: Scry = (name, set = '') =>
  new Promise<AxiosResponse>((resolve, reject) => {
    const realName = SHORTHANDS[name] || name;
    const realSet = set || SETS[realName];
    const [cache, api, query] = getApi(realName, realSet);
    const key = `${realName}/${realSet}`;
    if (cache[key]) {
      if (
        (cache[key] as AxiosResponse).status === undefined ||
        (cache[key] as AxiosResponse).status === HttpStatusCode.OK
      ) {
        return resolve(cache[key]);
      }
      return reject(cache[key]);
    }
    cache[key] = axios.get(`${api}?${query}`);
    return (cache[key] as Promise<AxiosResponse>).then(
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
