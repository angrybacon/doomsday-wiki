import axios from 'axios';
import { getCard } from '@/tools/game/getCard';
import { SETS } from '@/tools/game/constants/Sets';
import type { ScryData, ScryError } from '@/tools/scryfall/types';

enum CacheStatus {
  DONE = 'done',
  PENDING = 'pending',
}

interface CacheEntryDone {
  count: number;
  data: ScryData;
  promise?: never;
  status: CacheStatus.DONE;
}

interface CacheEntryPending {
  count: number;
  data?: never;
  promise: Promise<ScryData | ScryError>;
  status: CacheStatus.PENDING;
}

type CacheEntry = CacheEntryDone | CacheEntryPending;

/**
 * Attempt at keeping pending requests around.
 * Values can either a query response or `null` in which case it means the
 * request is still pending.
 */
type Cache = Record<string, CacheEntry>;

/**
 * Cache to hold concurrent search queries.
 * The content can either be a resolved or rejected promise, or a pending
 * promise.
 */
const CACHE: { named: Cache; search: Cache; set: Cache } = {
  named: {},
  search: {},
  set: {},
};

/** Endpoints to query for a card name. */
enum Api {
  NAMED = 'https://api.scryfall.com/cards/named',
  SEARCH = 'https://api.scryfall.com/cards/search',
  SET = 'https://api.scryfall.com/cards',
}

/**
 * Return a tuple representing the Scryfall configuration to use depending on
 * whether the query is ambiguous or definite.
 */
const getApi = (
  name: string,
  set?: string,
  collectorNumber?: string
): [Cache, Api, string] => {
  if (set && collectorNumber) {
    const api = `${Api.SET}/${set.toLowerCase()}/${collectorNumber}`;
    return [CACHE.set, api as Api, ''];
  }
  if (set) {
    return [CACHE.named, Api.NAMED, `exact=${name}&set=${set}`];
  }
  const parameters = `q=!"${name}"&unique=prints&order=released&dir=asc`;
  return [CACHE.search, Api.SEARCH, parameters];
};

type Scry = (query: string) => Promise<ScryData>;

/**
 * Query Scryfall with `query`.
 *
 * It consists of a card name and an optionnal set separated by a `|`. Support
 * was added for collector number, also separated by a `|`. To keep the feature
 * consistent the card name is still expected in `query` albeit unused in this
 * case.
 *
 * This asynchronous function builds a cache of concurrent promises to avoid
 * querying twice for the same name and set pair.
 */
export const scry: Scry = async (query) => {
  const [name, set, collectorNumber] = query.split('|').map((it) => it.trim());
  const realName: string = getCard(name).name;
  const realSet: string | undefined = set || SETS[realName];
  const [cache, api, parameters] = getApi(realName, realSet, collectorNumber);
  const key = `${realName}/${realSet}`;
  cache[key] = cache[key] || {};
  if (cache[key].status === undefined) {
    const path = `${api}?${parameters}`;
    const promise = axios
      .get<ScryData | ScryError>(path)
      .then(({ data }) => data);
    cache[key] = { count: 0, promise, status: CacheStatus.PENDING };
    console.info(`[scryfall] ${realSet || '---'} ${realName}`);
  }
  cache[key].count += 1;
  let result: ScryData | ScryError;
  if (cache[key].status === CacheStatus.PENDING) {
    const { promise } = cache[key] as CacheEntryPending;
    result = await promise;
    if (!(result as ScryData).object) {
      const { details } = result as ScryError;
      throw new Error(`Scryfall query returned an error: "${details}"`);
    }
    delete cache[key].promise;
    cache[key].data = result as ScryData;
    cache[key].status = CacheStatus.DONE;
  } else {
    const { data } = cache[key] as CacheEntryDone;
    result = data;
  }
  return result as ScryData;
};
