import { parseClock } from '@/tools/clock/parseClock';

describe(parseClock.name, () => {
  describe('The time is expressed in seconds', () => {
    const tests: [input: string, output: string][] = [
      ['It is 1 second to midnight', '1 second'],
      ['It is 4 seconds to midnight', '4 seconds'],
      ['It is 8 seconds to midnight', '8 seconds'],
      ['It is 15 seconds to midnight', '15 seconds'],
      ['It is 16 seconds to midnight', '16 seconds'],
      ['It is 23 seconds to midnight', '23 seconds'],
      ['It is 42 seconds to midnight', '42 seconds'],
      ['IT IS 42 SECONDS TO MIDNIGHT', '42 seconds'],
      ['It is still 42 seconds to midnight', '42 seconds'],
      ['...It is 42 seconds to midnight...', '42 seconds'],
    ];

    it.each(tests)('should parse "%s"', (input, output) => {
      // When
      const result = parseClock(input);
      // Then
      expect(result).toEqual(output);
    });
  });

  describe('The time is expressed in minutes', () => {
    const tests: [input: string, output: string][] = [
      ['It is 1 minute to midnight', '1 minute'],
      ['It is 4 minutes to midnight', '4 minutes'],
      ['It is 8 minutes to midnight', '8 minutes'],
      ['It is 15 minutes to midnight', '15 minutes'],
      ['It is 16 minutes to midnight', '16 minutes'],
      ['It is 23 minutes to midnight', '23 minutes'],
      ['It is 42 minutes to midnight', '42 minutes'],
      ['IT IS 42 MINUTES TO MIDNIGHT', '42 minutes'],
      ['It is still 42 minutes to midnight', '42 minutes'],
      ['...It is 42 minutes to midnight...', '42 minutes'],
    ];

    it.each(tests)('should parse "%s"', (input, output) => {
      // When
      const result = parseClock(input);
      // Then
      expect(result).toEqual(output);
    });
  });

  describe('The time is expressed in both minutes and seconds', () => {
    const tests: [input: string, output: string][] = [
      ['It is 1 and a half minute to midnight', '1 and a half minute'],
      ['It is 4 and a half minutes to midnight', '4 and a half minutes'],
      ['It is 8 and a half minutes to midnight', '8 and a half minutes'],
      ['It is 15 and a half minutes to midnight', '15 and a half minutes'],
      ['It is 16 and a half minutes to midnight', '16 and a half minutes'],
      ['It is 23 and a half minutes to midnight', '23 and a half minutes'],
      ['It is 42 and a half minutes to midnight', '42 and a half minutes'],
      ['IT IS 42 AND A HALF MINUTES TO MIDNIGHT', '42 and a half minutes'],
      [
        'It is still 42 and a half minutes to midnight',
        '42 and a half minutes',
      ],
      [
        '...It is 42 and a half minutes to midnight...',
        '42 and a half minutes',
      ],
    ];

    it.each(tests)('should parse "%s"', (input, output) => {
      // When
      const result = parseClock(input);
      // Then
      expect(result).toEqual(output);
    });
  });

  describe('The time cannot be parsed', () => {
    const tests: string[] = ['', ' ', 'All your base are belong to us'];

    it.each(tests)('should not parse "%s"', (input) => {
      // When
      const result = parseClock(input);
      // Then
      expect(result).toEqual(undefined);
    });
  });
});
