import { getRosetta, type Rosetta } from '@/tools/game/getRosetta';
import { type Category } from '@/tools/markdown/constants/Category';

describe(getRosetta.name, () => {
  const tests: [category: `${Category}` | undefined, ok: string, ko: string][] =
    // prettier-ignore
    [
      ['appendices', 'Brainstorm',     'Consider'],
      ['ddft',       'Echo of Eons',   'Predict'],
      ['ddeft',      'Act on Impulse', 'Echo of Eons'],
      ['meandeck',   'Predict',        'Manamorphose'],
      [undefined,    'Brainstorm',     'Consider'],
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
