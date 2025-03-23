import { parse } from '@/tools/scryfall/parse';
import {
  type ScryCard,
  type ScryData,
  type ScryDataItem,
  type ScryDataList,
} from '@/tools/scryfall/types';

/** Data can contain a list of objects in case of non-deterministic searches */
const readFirstResult = (data: ScryData): ScryDataItem | undefined =>
  data.object === 'list' ? (data as ScryDataList).data[0] : data;

/** A single card can have multiple faces */
export const readFaces = async (
  data: ScryData,
  options?: { withPreview: boolean },
): Promise<ScryCard[]> => {
  const { withPreview } = { withPreview: false, ...options };
  const card = readFirstResult(data);
  let faces: ScryDataItem[] = [];
  if (card?.card_faces?.[0]) {
    faces = card.card_faces.map(({ object, ...it }) => ({ ...card, ...it }));
  } else if (card) {
    faces = [card];
  }
  return Promise.all(faces.map((data) => parse({ data, withPreview })));
};
