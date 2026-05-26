import { getClock } from '@/tools/clock/getClock';

global.fetch = vi.fn<typeof fetch>();

describe(getClock, () => {
  const text = vi.fn<() => Promise<string>>();

  beforeEach(() => {
    vi.mocked(fetch).mockResolvedValue({
      ok: true,
      text,
    } as Partial<Response> as Response);
  });

  it('should parse the Doomsday clock', async () => {
    // Given
    text.mockResolvedValueOnce(
      `<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:description" content="It is 89 seconds to midnight">
<meta property="og:url" content="protocol://domain.tld/path/">`,
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the final dot', async () => {
    // Given
    text.mockResolvedValueOnce(
      `<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:description" content="It is 89 seconds to midnight.">
<meta property="og:url" content="protocol://domain.tld/path/">`,
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the final forward slash', async () => {
    // Given
    text.mockResolvedValueOnce(
      `<meta name="description" content="Wrong description"  />
<meta property="og:title" content="Title"  />
<meta property="og:description" content="It is 89 seconds to midnight"  />
<meta property="og:url" content="protocol://domain.tld/path/"  />`,
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the extra spaces', async () => {
    // Given
    text.mockResolvedValueOnce(
      `<  meta  name="description"  content="Wrong description"  >
<  meta  property="og:title"  content="Title"  >
<  meta  property="og:description"  content="It is 89 seconds to midnight"  >
<  meta  property="og:url"  content="protocol://domain.tld/path/"  >`,
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should handle fetch failures', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValue({
      text,
    } as Partial<Response> as Response);
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to fetch');
  });

  it('should handle empty documents', async () => {
    // Given
    text.mockResolvedValueOnce('');
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to parse');
  });

  it('should handle missing descriptions', async () => {
    // Given
    text.mockResolvedValueOnce(
      `<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:url" content="protocol://domain.tld/path/">`,
    );
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to parse');
  });
});
