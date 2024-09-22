import { zChapter } from '@/tools/z/schemas';

describe('zChapter', () => {
  it('should not validate an unknown chapter', () => {
    // When
    const test = () => zChapter.parse('unknown');
    // Then
    expect(test).toThrow();
  });

  it('should uppercase the parsed value', () => {
    // When
    const output = zChapter.parse('DdFt');
    // Then
    expect(output).toEqual('DDFT');
  });

  it('should skip the digit prefix', () => {
    // When
    const output = zChapter.parse('01-ddft');
    // Then
    expect(output).toEqual('DDFT');
  });

  describe('Known chapters', () => {
    const tests: [input: string, expected: string][] = [
      ['appendices', 'APPENDICES'],
      ['ddft', 'DDFT'],
      ['ddeft', 'DDEFT'],
      ['entombsday', 'ENTOMBSDAY'],
      ['meandeck', 'MEANDECK'],
    ];

    it.each(tests)(
      'should validate known chapters: "%s"',
      (input, expected) => {
        // When
        const output = zChapter.parse(input);
        // Then
        expect(output).toEqual(expected);
      },
    );
  });
});
