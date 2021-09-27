import { parseHeader } from '@/tools/decklists/parseHeader';

describe(parseHeader.name, () => {
  it('should parse the title and author', () => {
    // Given
    const title = 'Decklist Title';
    const author = 'Firstname Lastname';
    const buffer = [`// Title: ${title}`, `// Author: ${author}`].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.author).toEqual(author);
    expect(result.title).toEqual(title);
  });

  it('should parse the title', () => {
    // Given
    const title = 'Decklist Title';
    const buffer = `// Title: ${title}`;
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.author).toBeUndefined();
    expect(result.title).toEqual(title);
  });

  it('should not parse the author without a title', () => {
    // Given
    const buffer = `// Author: Firstname Latname`;
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.author).toBeUndefined();
    expect(result.title).toBeUndefined();
  });
});
