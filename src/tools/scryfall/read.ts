import type { ScryDataItem, ScryDataList } from '@/tools/scryfall/types';

/** Convenience typing for data to be parsed. */
type Data = ScryDataItem | ScryDataList;

/** Data can contain a list of objects in case of non-deterministic searches. */
export const readFirstResult = (data: Data): ScryDataItem =>
  data.object === 'list' ? data.data[0] : data;

/** Data can contain multiple card faces. */
export const readFirstFace = (data: Data): ScryDataItem => {
  const card: ScryDataItem = readFirstResult(data);
  return { ...card, ...(card?.card_faces?.[0] || {}) };
};
