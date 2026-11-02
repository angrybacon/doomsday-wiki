import type { ScrySingleResponse } from '@korumite/scrydrop';

type Source = ScrySingleResponse[number];

/** A lite version of `ScrySingleResponse` */
export type ScrySingleResponseSlim = (Pick<
  Source,
  'alternate' | 'layout' | 'name' | 'oracle_text' | 'set'
> & {
  image_uris?: Pick<NonNullable<Source['image_uris']>, 'normal'>;
  lqip?: Pick<NonNullable<Source['lqip']>, 'card'>;
})[];

/**
 * Keep only the fields the UI renders for each face in FACES.
 *
 * Scryfall responses are much larger than what we display and pages serialize
 * them in both their HTML and RSC payloads. Absent keys are omitted instead of
 * set to `undefined` because the latter is serialized too.
 */
export const slim = (faces: ScrySingleResponse): ScrySingleResponseSlim =>
  faces.map((face) => ({
    alternate: face.alternate,
    layout: face.layout,
    name: face.name,
    set: face.set,
    ...(face.image_uris && { image_uris: { normal: face.image_uris.normal } }),
    ...(face.lqip && { lqip: { card: face.lqip.card } }),
    ...(face.oracle_text && { oracle_text: face.oracle_text }),
  }));
