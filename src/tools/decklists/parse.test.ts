import { parse } from '@/tools/decklists/parse';
import { parseCards } from '@/tools/decklists/parseCards';
import { parseHeader } from '@/tools/decklists/parseHeader';

jest.mock('@/tools/decklists/parseCards');

jest.mock('@/tools/decklists/parseHeader');

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
    jest.resetAllMocks();
    (parseCards as jest.Mock).mockReturnValue({});
    (parseHeader as jest.Mock).mockReturnValue({});
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
    (parseCards as jest.Mock).mockReturnValueOnce({ cards: 'MAIN', count: 2 });
    (parseCards as jest.Mock).mockReturnValueOnce({ cards: 'SIDE', count: 4 });
    const buffer = sample;
    // When
    const result = parse(buffer);
    // Then
    expect(result).toStrictEqual(
      expect.objectContaining({
        main: 'MAIN',
        mainCount: 2,
        side: 'SIDE',
        sideCount: 4,
      }),
    );
  });
});
