import { parseCards } from '@/tools/decklists/parseCards';

/**
 * Create a dummy string representing a body of cards as expected from decklist
 * files.
 * Accept any amount of number parameters and fill the result string with that
 * many groups of cards, each containing the corresponding number of lines.
 * The lines inserted contain unnecessary whitespaces on purpose.
 */
const dummyCards = (...groups: number[]): string =>
  groups
    .filter((lines) => lines > 0)
    .map((lines) => new Array(lines).fill(`  4  Doomsday  `).join('\n'))
    .join('\n\n');

describe(parseCards.name, () => {
  it('should read a simple body of cards', () => {
    // Given
    const buffer: string = dummyCards(2);
    // When
    const { cards, count } = parseCards(buffer);
    // Then
    expect(cards).toStrictEqual([
      [
        [4, 'Doomsday'],
        [4, 'Doomsday'],
      ],
    ]);
    expect(count).toBe(8);
  });

  it('should read a multi-column body of cards', () => {
    // Given
    const buffer: string = dummyCards(2, 1);
    // When
    const { cards, count } = parseCards(buffer);
    // Then
    expect(cards).toStrictEqual([
      [
        [4, 'Doomsday'],
        [4, 'Doomsday'],
      ],
      [[4, 'Doomsday']],
    ]);
    expect(count).toBe(12);
  });

  it('should read an empty body of cards', () => {
    // Given
    const buffer: string = dummyCards();
    // When
    const { cards, count } = parseCards(buffer);
    // Then
    expect(cards).toStrictEqual([]);
    expect(count).toBe(0);
  });
});
