import { parse } from '@/tools/scryfall/parse';
import {
  ScryCard,
  ScryData,
  ScryDataItem,
  ScryDataList,
  ScryObject,
} from '@/tools/scryfall/types';

/** Data can contain a list of objects in case of non-deterministic searches. */
const readFirstResult = (data: ScryData): ScryDataItem =>
  data.object === ScryObject.LIST ? (data as ScryDataList).data[0] : data;

/** A single card can have multiple faces. */
export const readFaces = async (
  data: ScryData,
  options?: { withPreview: boolean }
): Promise<ScryCard[]> => {
  const { withPreview } = { withPreview: false, ...options };
  const card: ScryDataItem = readFirstResult(data);
  let faces: ScryDataItem[] = [card];
  if (card.card_faces?.[0].image_uris) {
    faces = card.card_faces.map(({ object, ...it }) => ({ ...card, ...it }));
  }
  return Promise.all(faces.map((data) => parse({ data, withPreview })));
};
