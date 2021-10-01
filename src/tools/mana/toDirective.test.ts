import { toDirective } from '@/tools/mana/toDirective';

describe(toDirective.name, () => {
  const specifications: [string, [string, string][]][] = [
    [
      'Simple',
      [
        ['{W}', ':mana[W]'],
        ['{U}', ':mana[U]'],
        ['{B}', ':mana[B]'],
        ['{R}', ':mana[R]'],
        ['{G}', ':mana[G]'],
        ['{S}', ':mana[S]'],
      ],
    ],
    [
      'Multiple',
      [
        ['{W}{U}{B}{R}{G}', ':mana[W]:mana[U]:mana[B]:mana[R]:mana[G]'],
        ['{B}{B}{B}{B}{B}', ':mana[B]:mana[B]:mana[B]:mana[B]:mana[B]'],
      ],
    ],
    [
      'Phyrexian',
      [
        ['{WP}', ':mana[WP]'],
        ['{UP}', ':mana[UP]'],
        ['{BP}', ':mana[BP]'],
        ['{RP}', ':mana[RP]'],
        ['{GP}', ':mana[GP]'],
      ],
    ],
    [
      'Hybrid',
      // prettier-ignore
      [
        ['{WU}', ':mana[WU]'],  ['{WB}', ':mana[WB]'],
        ['{UB}', ':mana[UB]'],  ['{UR}', ':mana[UR]'],
        ['{BR}', ':mana[BR]'],  ['{BG}', ':mana[BG]'],
        ['{RG}', ':mana[RG]'],  ['{RW}', ':mana[RW]'],
        ['{GW}', ':mana[GW]'],  ['{GU}', ':mana[GU]'],
      ],
    ],
    [
      'Hybrid colorless',
      [
        ['{2W}', ':mana[2W]'],
        ['{2U}', ':mana[2U]'],
        ['{2B}', ':mana[2B]'],
        ['{2R}', ':mana[2R]'],
        ['{2G}', ':mana[2G]'],
      ],
    ],
    [
      'Colorless',
      // prettier-ignore
      [
        ['{0}',  ':mana[0]'],   ['{1}',  ':mana[1]'],   ['{2}',  ':mana[2]'],
        ['{3}',  ':mana[3]'],   ['{4}',  ':mana[4]'],   ['{5}',  ':mana[5]'],
        ['{6}',  ':mana[6]'],   ['{7}',  ':mana[7]'],   ['{8}',  ':mana[8]'],
        ['{9}',  ':mana[9]'],   ['{10}', ':mana[10]'],  ['{11}', ':mana[11]'],
        ['{12}', ':mana[12]'],  ['{13}', ':mana[13]'],  ['{14}', ':mana[14]'],
        ['{15}', ':mana[15]'],  ['{13}', ':mana[13]'],  ['{17}', ':mana[17]'],
        ['{18}', ':mana[18]'],  ['{19}', ':mana[19]'],  ['{20}', ':mana[20]'],
        ['{X}',  ':mana[X]'],   ['{Y}',  ':mana[Y]'],   ['{Z}',  ':mana[Z]'],
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
        expect(toDirective(text)).toEqual(expected);
      });
    });
  });

  describe('Unsupported', () => {
    it('should not parse unsupported patterns', () => {
      // Given
      const text = 'Before {A} After';
      // Then
      expect(toDirective(text)).toEqual(text);
    });

    it('should not parse unsupported multi-characters patterns', () => {
      // Given
      const text = 'Before {UNSUPPORTED} After';
      // Then
      expect(toDirective(text)).toEqual(text);
    });

    it('should not parse composed patterns', () => {
      // Given
      const text = 'Before {2UB} After';
      // Then
      expect(toDirective(text)).toEqual(text);
    });
  });
});
