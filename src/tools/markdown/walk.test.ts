import { readFileSync } from 'fs';
import { vol } from 'memfs';
import { walk } from '@/tools/markdown/walk';

jest.mock('fs', () => {
  const fs = require('memfs');
  return fs;
});

describe(walk.name, () => {
  beforeAll(() => {
    vol.fromJSON(
      {
        'a/a.mdx': '',
        'a/b.txt': '',
        'a/c.mdx': '',
        'b/a/b.txt': '',
        'b/c/d.txt': '',
        'c/d/e/f.mdx': '',
        'empty.d': null,
      },
      '/root'
    );
  });

  afterAll(() => {
    vol.reset();
  });

  describe('Basic', () => {
    it('should use the mocked file system', () => {
      // When
      const result = readFileSync('/root/a/a.mdx', { encoding: 'utf8' });
      // Then
      expect(result).toEqual('');
    });

    it('should build the complete root structure', () => {
      // When
      const result = Array.from(walk('/root', { extension: undefined }));
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
        ['c', 'd', 'e', 'f'],
      ]);
    });

    it('should build an empty array when the directory is empty', () => {
      // When
      const result = Array.from(walk('/rootempty.d'));
      // Then
      expect(result).toEqual([]);
    });

    it('should build an empty array when the directory does not exist', () => {
      // When
      const result = Array.from(walk('/does/not/exist'));
      // Then
      expect(result).toEqual([]);
    });
  });

  describe('Extension', () => {
    it('should match MDX files by default', () => {
      // When
      const result = Array.from(walk('/root'));
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'c'],
        ['c', 'd', 'e', 'f'],
      ]);
    });

    it('should match TXT files when specified', () => {
      // When
      const result = Array.from(walk('/root', { extension: '.txt' }));
      // Then
      expect(result).toEqual([
        ['a', 'b'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
      ]);
    });
  });

  describe('Depth', () => {
    it('should build the complete root structure by default', () => {
      // When
      const result = Array.from(walk('/root', { extension: undefined }));
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
        ['b', 'a', 'b'],
        ['b', 'c', 'd'],
        ['c', 'd', 'e', 'f'],
      ]);
    });

    it('should build up to the specified depth', () => {
      // When
      const result = Array.from(
        walk('/root', { depth: 2, extension: undefined })
      );
      // Then
      expect(result).toEqual([
        ['a', 'a'],
        ['a', 'b'],
        ['a', 'c'],
      ]);
    });
  });
});
