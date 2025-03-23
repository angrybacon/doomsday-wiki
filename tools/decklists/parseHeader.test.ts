import { parseHeader } from '@/tools/decklists/parseHeader';
import { toArray } from '@/tools/mana/toArray';

jest.mock('@/tools/mana/toArray');

describe(parseHeader.name, () => {
  beforeAll(() => {
    (toArray as jest.Mock).mockImplementation((text) => text);
  });

  it('should parse the header and trim each line', () => {
    // Given
    const title = 'Decklist Title';
    const authors = 'Firstname Lastname';
    const colors = '{C1} {C2} {C3} {C4} {C5}';
    const buffer = [
      `// Title:    ${title}    `,
      `// Authors:  ${authors}  `,
      `// Colors:   ${colors}   `,
    ].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.authors).toEqual(authors);
    expect(result.colors).toEqual(colors);
    expect(result.title).toEqual(title);
  });

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
    const colors = '{C1} {C2} {C3} {C4} {C5}';
    const buffer = [`// Title: Title`, `// Colors: ${colors}`].join('\n');
    // When
    const result = parseHeader(buffer);
    // Then
    expect(result.colors).toEqual(colors);
  });
});
