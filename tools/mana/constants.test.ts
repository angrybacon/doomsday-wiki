import { MANA_RE } from '@/tools/mana/constants';

/** Dummy replace tester */
const replace = (text: string): string => {
  const result = text.replace(MANA_RE, ':m[$1]');
  return result;
};

describe(replace.name, () => {
  const specifications: [string, [string, string][]][] = [
    [
      'Simple',
      [
        ['{W}', ':m[W]'],
        ['{U}', ':m[U]'],
        ['{B}', ':m[B]'],
        ['{R}', ':m[R]'],
        ['{G}', ':m[G]'],
        ['{S}', ':m[S]'],
      ],
    ],
    [
      'Multiple',
      [
        ['{W}{U}{B}{R}{G}', ':m[W]:m[U]:m[B]:m[R]:m[G]'],
        ['{B}{B}{B}{B}{B}', ':m[B]:m[B]:m[B]:m[B]:m[B]'],
      ],
    ],
    [
      'Phyrexian',
      [
        ['{WP}', ':m[WP]'],
        ['{UP}', ':m[UP]'],
        ['{BP}', ':m[BP]'],
        ['{RP}', ':m[RP]'],
        ['{GP}', ':m[GP]'],
      ],
    ],
    [
      'Hybrid',
      [
        ['{WU}', ':m[WU]'],
        ['{WB}', ':m[WB]'],
        ['{UB}', ':m[UB]'],
        ['{UR}', ':m[UR]'],
        ['{BR}', ':m[BR]'],
        ['{BG}', ':m[BG]'],
        ['{RG}', ':m[RG]'],
        ['{RW}', ':m[RW]'],
        ['{GW}', ':m[GW]'],
        ['{GU}', ':m[GU]'],
      ],
    ],
    [
      'Hybrid colorless',
      [
        ['{2W}', ':m[2W]'],
        ['{2U}', ':m[2U]'],
        ['{2B}', ':m[2B]'],
        ['{2R}', ':m[2R]'],
        ['{2G}', ':m[2G]'],
      ],
    ],
    [
      'Colorless',
      // prettier-ignore
      [
        ['{0}',  ':m[0]'],   ['{1}',  ':m[1]'],   ['{2}',  ':m[2]'],
        ['{3}',  ':m[3]'],   ['{4}',  ':m[4]'],   ['{5}',  ':m[5]'],
        ['{6}',  ':m[6]'],   ['{7}',  ':m[7]'],   ['{8}',  ':m[8]'],
        ['{9}',  ':m[9]'],   ['{10}', ':m[10]'],  ['{11}', ':m[11]'],
        ['{12}', ':m[12]'],  ['{13}', ':m[13]'],  ['{14}', ':m[14]'],
        ['{15}', ':m[15]'],  ['{13}', ':m[13]'],  ['{17}', ':m[17]'],
        ['{18}', ':m[18]'],  ['{19}', ':m[19]'],  ['{20}', ':m[20]'],
        ['{X}',  ':m[X]'],   ['{Y}',  ':m[Y]'],   ['{Z}',  ':m[Z]'],
      ],
    ],
  ];

  specifications.forEach(([prompt, tests]) => {
    describe(prompt, () => {
      it.each(tests)('should parse %s', (input, output) => {
        // Given
        const text = `Before ${input} After`;
        // Then
        const expected = `Before ${output} After`;
        expect(replace(text)).toEqual(expected);
      });
    });
  });

  describe('Unsupported', () => {
    it('should not parse unsupported patterns', () => {
      // Given
      const text = 'Before {A} After';
      // Then
      expect(replace(text)).toEqual(text);
    });

    it('should not parse unsupported multi-characters patterns', () => {
      // Given
      const text = 'Before {UNSUPPORTED} After';
      // Then
      expect(replace(text)).toEqual(text);
    });

    it('should not parse composed patterns', () => {
      // Given
      const text = 'Before {2UB} After';
      // Then
      expect(replace(text)).toEqual(text);
    });
  });
});
