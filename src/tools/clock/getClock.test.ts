import { getClock } from '@/tools/clock/getClock';
import { parseClock } from '@/tools/clock/parseClock';

jest.mock('@/tools/clock/parseClock');

const mockFetch = (value: string) => {
  const text = () => Promise.resolve(value);
  global.fetch = jest.fn(() => Promise.resolve({ text } as Response));
};

describe(getClock.name, () => {
  it('should fetch the first level 2 headline', async () => {
    // Given
    const html = `
<html>
  <body>
    <h1>Heading 1</h1>
    <p>Paragraph</p>
    <h2>Heading 2</h2>
    <h2>Heading 3</h2>
  <body>
</html>`;
    mockFetch(html);
    // When
    await getClock();
    // Then
    expect(parseClock).toHaveBeenCalledTimes(1);
    expect(parseClock).toHaveBeenCalledWith('Heading 2');
  });

  it('should resolve nothing when the headline cannot be found', async () => {
    // Given
    const html = `<html><body><h1>Heading</h1><body></html>`;
    mockFetch(html);
    // When
    const result = await getClock();
    // Then
    expect(result).toEqual(null);
  });
});
