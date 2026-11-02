import type { ScrySingleResponse } from '@korumite/scrydrop';

import { slim } from '~/tools/scryfall/slim';

const FACE: ScrySingleResponse[number] = {
  alternate: ['"Doomsday" from Weatherlight', 'Art by Adrian Smith'],
  artist: 'Adrian Smith',
  color_identity: ['b'],
  id: 'id',
  image_uris: {
    art_crop: 'art_crop',
    border_crop: 'border_crop',
    large: 'large',
    normal: 'normal',
    png: 'png',
    small: 'small',
  },
  layout: 'normal',
  lqip: { art: '/lqip/id.art.png', card: '/lqip/id.card.png' },
  name: 'Doomsday',
  object: 'card',
  oracle_text: ['Search your library.'],
  set: 'wth',
  set_name: 'Weatherlight',
};

describe(slim, () => {
  it('should only keep the relevant fields', () => {
    // Given
    const faces = [FACE];
    // When
    const result = slim(faces);
    // Then
    expect(result).toEqual([
      {
        alternate: FACE.alternate,
        image_uris: { normal: 'normal' },
        layout: 'normal',
        lqip: { card: '/lqip/id.card.png' },
        name: 'Doomsday',
        oracle_text: ['Search your library.'],
        set: 'wth',
      },
    ]);
  });

  it('should omit the absent fields instead of setting them to undefined', () => {
    // Given
    const {
      image_uris: _image,
      lqip: _lqip,
      oracle_text: _text,
      ...rest
    } = FACE;
    // When
    const [result = {}] = slim([{ ...rest, lqip: undefined }]);
    // Then
    expect(Object.keys(result)).toEqual(['alternate', 'layout', 'name', 'set']);
  });

  it('should keep the order of the faces', () => {
    // Given
    const faces = [FACE, { ...FACE, name: 'Back' }];
    // When
    const result = slim(faces);
    // Then
    expect(result.map((it) => it.name)).toEqual(['Doomsday', 'Back']);
  });
});
