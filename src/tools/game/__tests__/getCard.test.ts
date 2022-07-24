import { getCard } from '@/tools/game/getCard';
import { Category } from '@/tools/markdown/constants/Category';

describe(getCard.name, () => {
  it('should return the name of a known acronym', () => {
    // When
    const { name, categories } = getCard('AD');
    // Then
    expect(name).toBe('Abrupt Decay');
    expect(categories).toStrictEqual([]);
  });

  it('should return the name and categories of a known acronym', () => {
    // When
    const { name, categories } = getCard('AoI');
    // Then
    expect(name).toBe('Act on Impulse');
    expect(categories).toStrictEqual([Category.DDEFT, Category.DDFT]);
  });

  it('should handle unknown acronyms', () => {
    // When
    const { name, categories } = getCard('UNKNOWN');
    // Then
    expect(name).toBe('UNKNOWN');
    expect(categories).toStrictEqual([]);
  });
});
