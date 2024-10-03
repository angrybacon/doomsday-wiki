import { getCard } from '@/tools/game/getCard';

describe(getCard.name, () => {
  it('should return the name of a known acronym', () => {
    // When
    const { name, categories } = getCard('DD');
    // Then
    expect(name).toBe('Doomsday');
    expect(categories).toStrictEqual([]);
  });

  it('should return the name and categories of a known acronym', () => {
    // When
    const { name, categories } = getCard('AoI');
    // Then
    expect(name).toBe('Act on Impulse');
    expect(categories).toStrictEqual(['DDEFT', 'DDFT']);
  });

  it('should handle unknown acronyms', () => {
    // When
    const { name, categories } = getCard('UNKNOWN');
    // Then
    expect(name).toBe('UNKNOWN');
    expect(categories).toStrictEqual([]);
  });
});
