import { getClock } from '@/tools/clock/getClock';

/**
 * Cookie to reuse the same promise for further references.
 * This is not a perfect solution as the application relies on multiple workers
 * to build, resulting in several instances of this cookie to exist at a given
 * time.
 */
let GET_CLOCK_PROMISE: Promise<string | null>;

type GetClockCached = () => Promise<string | null>;

export const getClockCached: GetClockCached = () => {
  if (!GET_CLOCK_PROMISE) {
    GET_CLOCK_PROMISE = getClock();
  }
  return GET_CLOCK_PROMISE;
};
