import { parse } from '@/tools/scryfall/parse';
import {
  ScryCard,
  ScryData,
  ScryDataItem,
  ScryDataList,
  ScryDataObject,
} from '@/tools/scryfall/types';

/** Data can contain a list of objects in case of non-deterministic searches. */
export const readFirstResult = (data: ScryData): ScryDataItem =>
  data.object === ScryDataObject.LIST ? (data as ScryDataList).data[0] : data;

/** Data can contain multiple card faces. */
export const readFirstFace = (data: ScryData): ScryCard => {
  let card: ScryDataItem = readFirstResult(data);
  card = { ...card, ...(card?.card_faces?.[0] || {}) };
  return parse(card);
};
