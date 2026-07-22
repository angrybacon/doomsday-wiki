import { parseHeader } from '~/tools/decklists/parseHeader';

describe(parseHeader, () => {
  it('should parse the title', () => {
    // Given
    const title = 'Decklist Title';
    const buffer = `// Title: ${title}`;
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.title).toEqual(title);
  });

  it('should parse the authors', () => {
    // Given
    const authors = 'Firstname Lastname';
    const buffer = [`// Title: Title`, `// Authors: ${authors}`].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toEqual(authors);
  });

  it('should parse the colors', () => {
    // Given
    const colors = '{W} {U} {B} {R} {G}';
    const buffer = [`// Title: Title`, `// Colors: ${colors}`].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.colors).toEqual(['w', 'u', 'b', 'r', 'g']);
  });

  it('should parse the header and trim each line', () => {
    // Given
    const title = 'Decklist Title';
    const authors = 'Firstname Lastname';
    const colors = '{W} {U} {B} {R} {G}';
    const buffer = [
      `// Title:    ${title}   `,
      `// Authors:  ${authors} `,
      `// Colors:   ${colors}  `,
    ].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toEqual('Firstname Lastname');
    expect(result.colors).toEqual(['w', 'u', 'b', 'r', 'g']);
    expect(result.title).toEqual('Decklist Title');
  });
});
