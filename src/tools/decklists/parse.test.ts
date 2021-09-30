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
    (parseHeader as jest.Mock).mockReturnValue({});
  });

  it('should parse the header', () => {
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

  it('should parse the body', () => {
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
});
