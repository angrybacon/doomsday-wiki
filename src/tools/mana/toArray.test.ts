import { toArray } from '@/tools/mana/toArray';

describe(toArray.name, () => {
  const specifications: [title: string, input: string, expected: string[]][] =
    // prettier-ignore
    [
    ['White',             'L {W} R',             ['w']],
    ['Blue',              'L {U} R',             ['u']],
    ['Black',             'L {B} R',             ['b']],
    ['Red',               'L {R} R',             ['r']],
    ['Green',             'L {G} R',             ['g']],
    ['Azorius Senate',    'L {W}{U} R',          ['w', 'u']],
    ['House Dimir',       'L {U}{B} R',          ['u', 'b']],
    ['Cult of Rakdos',    'L {B}{R} R',          ['b', 'r']],
    ['Gruul Clans',       'L {R}{G} R',          ['r', 'g']],
    ['Selesnya Conclave', 'L {W}{G} R',          ['w', 'g']],
    ['Orzhov Syndicate',  'L {W}{B} R',          ['w', 'b']],
    ['Izzet League',      'L {U}{R} R',          ['u', 'r']],
    ['Golgari Swarm',     'L {B}{G} R',          ['b', 'g']],
    ['Boros Legion',      'L {W}{R} R',          ['w', 'r']],
    ['Simic Combine',     'L {U}{G} R',          ['u', 'g']],
    ['Indatha Triome',    'L {W}{B}{G} R',       ['w', 'b', 'g']],
    ['Raugrin Triome',    'L {U}{R}{W} R',       ['u', 'r', 'w']],
    ['Zagoth Triome',     'L {B}{G}{U} R',       ['b', 'g', 'u']],
    ['Savai Triome',      'L {R}{W}{B} R',       ['r', 'w', 'b']],
    ['Ketria Triome',     'L {G}{U}{R} R',       ['g', 'u', 'r']],
    ['Artifice',          'L {W}{U}{B}{R} R',    ['w', 'u', 'b', 'r']],
    ['Chaos',             'L {U}{B}{R}{G} R',    ['u', 'b', 'r', 'g']],
    ['Aggression',        'L {B}{R}{G}{W} R',    ['b', 'r', 'g', 'w']],
    ['Altruism',          'L {R}{G}{W}{U} R',    ['r', 'g', 'w', 'u']],
    ['Growth',            'L {G}{W}{U}{B} R',    ['g', 'w', 'u', 'b']],
    ['All colors',        'L {W}{U}{B}{R}{G} R', ['w', 'u', 'b', 'r', 'g']],
  ];

  it.each(specifications)(
    'should identify mana symbols for: %s',
    (_, input, expected) => {
      // When
      const output = toArray(input);
      // Then
      expect(output).toStrictEqual(expected);
    },
  );
});
