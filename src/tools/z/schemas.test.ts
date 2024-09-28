import { zCategory, zChapter } from '@/tools/z/schemas';

describe('zCategory', () => {
  it('should not validate an unknown category', () => {
    // When
    const test = () => zCategory.parse('unknown');
    // Then
    expect(test).toThrow();
  });

  it('should uppercase the parsed value', () => {
    // When
    const output = zCategory.parse('DdFt');
    // Then
    expect(output).toEqual('DDFT');
  });

  describe('Known categories', () => {
    const tests: [input: string, expected: string][] = [
      ['appendices', 'APPENDICES'],
      ['ddft', 'DDFT'],
      ['ddeft', 'DDEFT'],
      ['entombsday', 'ENTOMBSDAY'],
      ['meandeck', 'MEANDECK'],
    ];

    it.each(tests)(
      'should validate known cateories: "%s"',
      (input, expected) => {
        // When
        const output = zCategory.parse(input);
        // Then
        expect(output).toEqual(expected);
      },
    );
  });
});

describe('zChapter', () => {
  it('should not validate an unknown chapter', () => {
    // When
    const test = () => zChapter.parse('unknown');
    // Then
    expect(test).toThrow();
  });

  it('should not validate a known chapter with the wrong case', () => {
    // When
    const test = () => zChapter.parse('Meandeck');
    // Then
    expect(test).toThrow();
  });

  describe('Known categories', () => {
    const tests: string[] = [
      'appendices',
      'ddft',
      'ddeft',
      'entombsday',
      'meandeck',
    ];

    it.each(tests)('should validate known cateories: "%s"', (value) => {
      // When
      const output = zChapter.parse(value);
      // Then
      expect(output).toEqual(value);
    });
  });
});
