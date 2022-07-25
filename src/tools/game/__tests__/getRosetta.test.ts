import { getRosetta } from '@/tools/game/getRosetta';
import type { Rosetta } from '@/tools/game/getRosetta';
import { Category } from '@/tools/markdown/constants/Category';

describe(getRosetta.name, () => {
  const tests: [category: Category, ok: string, ko: string][] =
    // prettier-ignore
    [
      [Category.APPENDICES, 'Brainstorm',     'Consider'],
      [Category.DDFT,       'Echo of Eons',   'Predict'],
      [Category.DDEFT,      'Act on Impulse', 'Echo of Eons'],
      [Category.MEANDECK,   'Predict',        'Manamorphose'],
    ];

  it.each(tests)(
    "should return the appropriate notations for '%s'",
    (category, ok, ko) => {
      // When
      const rosetta: Rosetta = getRosetta(category);
      // Then
      expect(rosetta.find(([, name]) => name === ok)).toBeTruthy();
      expect(rosetta.find(([, name]) => name === ko)).toBeFalsy();
    }
  );
});
