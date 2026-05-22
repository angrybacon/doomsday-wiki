import { translate } from '@/tools/rosetta/translate';

describe(translate, () => {
  it('should return the name of a known acronym', () => {
    // When
    const { name, categories } = translate('DD');
    // Then
    expect(name).toBe('Doomsday');
    expect(categories).toStrictEqual([]);
  });

  it('should return the name and categories of a known acronym', () => {
    // When
    const { name, categories } = translate('AoI');
    // Then
    expect(name).toBe('Act on Impulse');
    expect(categories).toStrictEqual(['DDEFT', 'DDFT']);
  });

  it('should handle unknown names', () => {
    // When
    const { name, categories } = translate('AoI | FOO');
    // Then
    expect(name).toBe('AoI | FOO');
    expect(categories).toStrictEqual([]);
  });

  it('should handle unknown acronyms', () => {
    // When
    const { name, categories } = translate('UNKNOWN');
    // Then
    expect(name).toBe('UNKNOWN');
    expect(categories).toStrictEqual([]);
  });
});
