import { parse } from '@/tools/decklists/parse';
import { parseCards } from '@/tools/decklists/parseCards';
import { parseHeader } from '@/tools/decklists/parseHeader';

vi.mock('@/tools/decklists/parseCards');

vi.mock('@/tools/decklists/parseHeader');

const sample = [
  '// Title: Decklist Title',
  '// Authors: Firstname Lastname',
  '4 Doomsday',
  '4 Doomsday',
  '// Sideboard',
  '4 Echoing Truth',
  '4 Echoing Truth',
  '', // NOTE Normal people end files with a newline character
].join('\n');

describe(parse.name, () => {
  beforeEach(() => {
    vi.mocked(parseCards).mockReturnValue({ cards: [], count: 0 });
    vi.mocked(parseHeader).mockReturnValue({
      authors: null,
      colors: null,
      title: null,
    });
  });

  it('should identify the header', () => {
    // Given
    const buffer = sample;
    // When
    parse(buffer);
    // Then
    const expected = [
      '// Title: Decklist Title',
      '// Authors: Firstname Lastname',
      '',
    ].join('\n');
    expect(parseHeader).toHaveBeenCalledWith(expected);
  });

  it('should identify the body sections', () => {
    // Given
    const buffer = sample;
    // When
    parse(buffer);
    // Then
    const expectedMain = ['4 Doomsday', '4 Doomsday', ''].join('\n');
    const expectedSide = ['4 Echoing Truth', '4 Echoing Truth', ''].join('\n');
    expect(parseCards).toHaveBeenCalledTimes(2);
    expect(parseCards).toHaveBeenCalledWith(expectedMain);
    expect(parseCards).toHaveBeenCalledWith(expectedSide);
  });

  it('should return the parsed body sections', () => {
    // Given
    vi.mocked(parseCards).mockReturnValueOnce({
      cards: [[[4, 'Brainstorm']]],
      count: 4,
    });
    vi.mocked(parseCards).mockReturnValueOnce({
      cards: [[[1, 'Plains']]],
      count: 1,
    });
    const buffer = sample;
    // When
    const result = parse(buffer);
    // Then
    expect(result).toStrictEqual(
      expect.objectContaining({
        main: [[[4, 'Brainstorm']]],
        mainCount: 4,
        side: [[[1, 'Plains']]],
        sideCount: 1,
      }),
    );
  });
});
