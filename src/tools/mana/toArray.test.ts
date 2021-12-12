import { toArray } from '@/tools/mana/toArray';

describe(toArray.name, () => {
  const specifications: [string, string, string[]][] =
    // prettier-ignore
    [
    ['White',             '{W}',             ['w']],
    ['Blue',              '{U}',             ['u']],
    ['Black',             '{B}',             ['b']],
    ['Red',               '{R}',             ['r']],
    ['Green',             '{G}',             ['g']],
    ['Azorius Senate',    '{W}{U}',          ['w', 'u']],
    ['House Dimir',       '{U}{B}',          ['u', 'b']],
    ['Cult of Rakdos',    '{B}{R}',          ['b', 'r']],
    ['Gruul Clans',       '{R}{G}',          ['r', 'g']],
    ['Selesnya Conclave', '{W}{G}',          ['w', 'g']],
    ['Orzhov Syndicate',  '{W}{B}',          ['w', 'b']],
    ['Izzet League',      '{U}{R}',          ['u', 'r']],
    ['Golgari Swarm',     '{B}{G}',          ['b', 'g']],
    ['Boros Legion',      '{W}{R}',          ['w', 'r']],
    ['Simic Combine',     '{U}{G}',          ['u', 'g']],
    ['Indatha Triome',    '{W}{B}{G}',       ['w', 'b', 'g']],
    ['Raugrin Triome',    '{U}{R}{W}',       ['u', 'r', 'w']],
    ['Zagoth Triome',     '{B}{G}{U}',       ['b', 'g', 'u']],
    ['Savai Triome',      '{R}{W}{B}',       ['r', 'w', 'b']],
    ['Ketria Triome',     '{G}{U}{R}',       ['g', 'u', 'r']],
    ['Artifice',          '{W}{U}{B}{R}',    ['w', 'u', 'b', 'r']],
    ['Chaos',             '{U}{B}{R}{G}',    ['u', 'b', 'r', 'g']],
    ['Aggression',        '{B}{R}{G}{W}',    ['b', 'r', 'g', 'w']],
    ['Altruism',          '{R}{G}{W}{U}',    ['r', 'g', 'w', 'u']],
    ['Growth',            '{G}{W}{U}{B}',    ['g', 'w', 'u', 'b']],
    ['All colors',        '{W}{U}{B}{R}{G}', ['w', 'u', 'b', 'r', 'g']],
  ];

  it.each(specifications)(
    'should identify mana symbols for: %s',
    (_, input, colors) => {
      // When
      const output = toArray(input);
      // Then
      expect(output).toStrictEqual(colors);
    }
  );
});
