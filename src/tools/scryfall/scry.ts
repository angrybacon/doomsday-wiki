import { getCard } from '@/tools/game/getCard';
import { SETS } from '@/tools/game/constants/Sets';
import type { ScryData } from '@/tools/scryfall/types';

/**
 * Hardcoded URL pointing to the running Scryfall cache server. See
 * scryfall/server.js.
 */
const HOST = 'http://localhost:3333';

/** Endpoints to query for a specific card. */
const API = {
  NAMED: `${HOST}/cards/named`,
  SEARCH: `${HOST}/cards/search`,
  SET: `${HOST}/cards`,
} as const;

/**
 * Return a tuple representing the Scryfall configuration to use depending on
 * whether the query is ambiguous or definite.
 */
const getApi = (
  name: string,
  set?: string,
  collectorNumber?: string,
): [api: string, parameters: string] => {
  if (set && collectorNumber) {
    return [`${API.SET}/${set.toLowerCase()}/${collectorNumber}`, ''];
  }
  if (set) {
    return [API.NAMED, `exact=${name}&set=${set}`];
  }
  return [API.SEARCH, `q=!"${name}"&unique=prints&order=released&dir=asc`];
};

/**
 * Query Scryfall with `query`.
 *
 * The query consists of a card name and an optionnal set separated by a `|`.
 * Support was added for collector number, also separated by a `|`. To keep the
 * feature consistent the card name is still expected in `query` albeit unused
 * in this case.
 *
 * This asynchronous function builds a cache of concurrent promises to avoid
 * querying twice for the same name and set pair.
 */
export const scry = async (query: string): Promise<ScryData> => {
  const [name, set, collectorNumber] = query.split('|');
  const realName = getCard(name.trim()).name;
  const realSet = set || SETS[realName];
  const [api, parameters] = getApi(
    realName,
    realSet?.trim(),
    collectorNumber?.trim(),
  );
  const path = `${api}?${parameters}`;
  const response = await fetch(path);
  if (!response.ok) {
    const error: string = await response.text();
    throw error;
  }
  const result: ScryData = await response.json();
  return result;
};
