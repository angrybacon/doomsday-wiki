import { getRosetta, type Rosetta } from '@/tools/game/getRosetta';

describe(getRosetta.name, () => {
  const tests: [
    category: Parameters<typeof getRosetta>[0],
    ok: string,
    ko: string,
  ][] =
    // prettier-ignore
    [
      ['APPENDICES', 'Brainstorm',     'Consider'],
      ['DDFT',       'Echo of Eons',   'Predict'],
      ['DDEFT',      'Act on Impulse', 'Echo of Eons'],
      ['MEANDECK',   'Predict',        'Manamorphose'],
      [null,         'Brainstorm',     'Consider'],
    ];

  it.each(tests)(
    "should return the appropriate notation for '%s'",
    (category, ok, ko) => {
      // When
      const rosetta: Rosetta = getRosetta(category);
      // Then
      expect(rosetta.find(([, name]) => name === ok)).toBeTruthy();
      expect(rosetta.find(([, name]) => name === ko)).toBeFalsy();
    },
  );
});
