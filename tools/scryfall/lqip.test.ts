import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { lqip } from '~/tools/scryfall/lqip';

describe(lqip, () => {
  let directory: string;

  beforeEach(async () => {
    directory = await mkdtemp(join(tmpdir(), 'lqip-'));
    vi.spyOn(process, 'cwd').mockReturnValue(directory);
  });

  afterEach(async () => {
    await rm(directory, { recursive: true, force: true });
  });

  it('should write the placeholders and return their paths', async () => {
    // Given
    // When
    const result = await lqip('id', {
      art: 'data:image/webp;base64,YXJ0',
      card: 'data:image/webp;base64,Y2FyZA==',
    });
    // Then
    expect(result).toEqual({
      art: '/lqip/id.art.webp',
      card: '/lqip/id.card.webp',
    });
    const [art, card] = await Promise.all([
      readFile(join(directory, 'public', 'lqip', 'id.art.webp')),
      readFile(join(directory, 'public', 'lqip', 'id.card.webp')),
    ]);
    expect(art.toString('base64')).toEqual('YXJ0');
    expect(card.toString('base64')).toEqual('Y2FyZA==');
  });

  it('should skip writing placeholders that already exist on disk', async () => {
    // Given
    await lqip('id', {
      art: 'data:image/webp;base64,YXJ0',
      card: 'data:image/webp;base64,Y2FyZA==',
    });
    const path = join(directory, 'public', 'lqip', 'id.art.webp');
    const before = await readFile(path);
    // When
    await lqip('id', {
      art: 'data:image/webp;base64,ZGlmZmVyZW50',
      card: 'data:image/webp;base64,Y2FyZA==',
    });
    // Then
    const after = await readFile(path);
    expect(after).toEqual(before);
  });

  it('should throw for a malformed data URI', async () => {
    // When
    const test = () => lqip('id', { art: 'not-a-data-uri', card: '' });
    // Then
    await expect(test).rejects.toThrow('Malformed LQIP data URI for "id"');
  });
});
