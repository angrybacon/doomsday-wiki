import { getClock } from '@/tools/clock/getClock';

global.fetch = vi.fn<typeof fetch>();

describe(getClock, () => {
  it('should parse the Doomsday clock', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(
        `<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:description" content="It is 89 seconds to midnight">
<meta property="og:url" content="protocol://domain.tld/path/">`,
      ),
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the final dot', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(`<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:description" content="It is 89 seconds to midnight.">
      <meta property="og:url" content="protocol://domain.tld/path/">`),
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the final forward slash', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(
        `<meta name="description" content="Wrong description"  />
<meta property="og:title" content="Title"  />
<meta property="og:description" content="It is 89 seconds to midnight"  />
<meta property="og:url" content="protocol://domain.tld/path/"  />`,
      ),
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should ignore the extra spaces', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(
        `<  meta  name="description"  content="Wrong description"  >
<  meta  property="og:title"  content="Title"  >
<  meta  property="og:description"  content="It is 89 seconds to midnight"  >
<  meta  property="og:url"  content="protocol://domain.tld/path/"  >`,
      ),
    );
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual('It is 89 seconds to midnight');
  });

  it('should handle fetch failures', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(new Response('', { status: 500 }));
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to fetch');
  });

  it('should handle empty documents', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(new Response(''));
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to parse');
  });

  it('should handle missing descriptions', async () => {
    // Given
    vi.mocked(fetch).mockResolvedValueOnce(
      new Response(
        `<meta name="description" content="Wrong description">
<meta property="og:title" content="Title">
<meta property="og:url" content="protocol://domain.tld/path/">`,
      ),
    );
    // When
    const test = () => getClock();
    // Then
    await expect(test).rejects.toThrow('Failed to parse');
  });
});
