import type { ScryData, ScryDataItem } from '@/tools/scryfall/types';

/** Data can contain a list of objects in case of non-deterministic searches. */
export const readFirstResult = (data: ScryData): ScryDataItem =>
  data.object === 'list' ? data.data[0] : data;

/** Data can contain multiple card faces. */
export const readFirstFace = (data: ScryData): ScryDataItem => {
  const card: ScryDataItem = readFirstResult(data);
  return { ...card, ...(card?.card_faces?.[0] || {}) };
};
