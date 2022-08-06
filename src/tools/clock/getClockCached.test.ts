import { getClock } from '@/tools/clock/getClock';
import { getClockCached } from '@/tools/clock/getClockCached';

jest.mock('@/tools/clock/getClock');

describe(getClockCached.name, () => {
  it('should reuse the promise cookie', async () => {
    // Given
    (getClock as jest.Mock).mockResolvedValue('Clock');
    // When
    getClockCached();
    getClockCached();
    await getClockCached();
    // Then
    expect(getClock).toHaveBeenCalledTimes(1);
  });
});
