import { parseHeader } from '@/tools/decklists/parseHeader';

describe(parseHeader.name, () => {
  it('should parse the title and authors', () => {
    // Given
    const title = 'Decklist Title';
    const authors = 'Firstname Lastname';
    const buffer = [`// Title: ${title}`, `// Authors: ${authors}`].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toEqual(authors);
    expect(result.title).toEqual(title);
  });

  it('should parse the title', () => {
    // Given
    const title = 'Decklist Title';
    const buffer = `// Title: ${title}`;
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toBeUndefined();
    expect(result.title).toEqual(title);
  });

  it('should not parse the authors without a title', () => {
    // Given
    const buffer = `// Authors: Firstname Lastname`;
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toBeUndefined();
    expect(result.title).toBeUndefined();
  });
});
