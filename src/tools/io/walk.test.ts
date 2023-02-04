import { readFileSync } from 'fs';
import { vol } from 'memfs';
import { walk } from '@/tools/io/walk';

jest.mock('fs', () => require('memfs'));

describe(walk.name, () => {
  afterAll(() => {
    vol.reset();
  });

  describe('Basic', () => {
    beforeEach(() => {
      vol.fromJSON(
        {
          'a/a.md': 'Content',
          'a/b.txt': '',
          'a/c.md': '',
          'b/a/b.txt': '',
          'b/c/d.txt': '',
          'c.d/d/e/f.md': '',
          'empty.d': null,
        },
        '/'
      );
    });

    it('should use the mocked file system', () => {
      // When
      const result = readFileSync('/a/a.md', { encoding: 'utf8' });
      // Then
      expect(result).toEqual('Content');
    });

    it('should build the complete root structure', () => {
      // When
      const result = walk('/');
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
        ['c.d', 'd', 'e', 'f'],
      ]);
    });

    it('should build an empty array when the directory is empty', () => {
      // When
      const result = walk('/empty.d');
      // Then
      expect(result).toEqual([]);
    });

    it('should build an empty array when the directory does not exist', () => {
      // When
      const result = walk('/does/not/exist');
      // Then
      expect(result).toEqual([]);
    });
  });

  describe('Extension', () => {
    beforeEach(() => {
      vol.fromJSON(
        {
          'a/a.md': '',
          'a/b.txt': '',
          'a/c.md': '',
          'b/a/b.txt': '',
          'b/c/d.txt': '',
          'c.d/d/e/f.md': '',
        },
        '/'
      );
    });

    it('should match all files by default', () => {
      // When
      const result = walk('/');
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
        ['c.d', 'd', 'e', 'f'],
      ]);
    });

    it('should match TXT files when specified', () => {
      // When
      const result = walk('/', { extension: '.txt' });
      // Then
      expect(result).toEqual([
        ['a', 'b'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
      ]);
    });
  });

  describe('Depth', () => {
    beforeEach(() => {
      vol.fromJSON(
        {
          'a/a.md': '',
          'a/b.txt': '',
          'a/c.md': '',
          'b/a/b.txt': '',
          'b/c/d.txt': '',
          'c.d/d/e/f.md': '',
        },
        '/'
      );
    });

    it('should build the complete root structure by default', () => {
      // When
      const result = walk('/');
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
        ['c.d', 'd', 'e', 'f'],
      ]);
    });

    it('should build up to the specified depth', () => {
      // When
      const result = walk('/', { depth: 2 });
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
      ]);
    });
  });
});
