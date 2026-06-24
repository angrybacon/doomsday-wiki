import { CARDS } from '@/tools/rosetta/constants';

/**
 * Try and find the full name and assigned categories for a given acronym.
 *
 * When no entry can be found, fallback to the provided KEY.
 */
export const translate = (key: string) => {
  const [name = key, categories = []] = CARDS[key] ?? [];
  return { name, categories };
};
