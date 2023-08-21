import { Category } from '@/tools/markdown/constants/Category';

/** Represent all available indices for the current assertion. */
type Index<L extends number, T extends number[] = []> = T['length'] extends L
  ? T[number]
  : Index<L, [T['length'], ...T]>;

/** Represent the current minimum length for the assertion. */
type MinimumLength<T extends ArrayLike<unknown>, L extends number> = Pick<
  Required<T>,
  Index<L>
>;

/** Throw when the provided `items` don't respect the minimum `depth`. */
export function assertDepth<T extends ArrayLike<unknown>, L extends number>(
  items: T,
  depth: L,
): asserts items is T & MinimumLength<T, L> {
  if (items.length < depth) {
    throw new Error(`Malformed path "${items}", expected depth of ${depth}`);
  }
}

/** Throw when the provided `category` is not known. */
export function assertCategory(category: string): asserts category is Category {
  if (!Object.values(Category).includes(category as Category)) {
    throw new Error(`Unknown category "${category}"`);
  }
}
