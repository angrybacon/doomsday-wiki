/**
 * Return a randomized array of numbers corresponding to a randomized deck.
 *
 * Assume SIZE fits in a 8-bit unsigned integer and implements a simple
 * Durstenfeld shuffle.
 */
export const shuffle = (size: number) => {
  const deck = new Uint8Array(size);
  for (let index = 0; index < size; index += 1) deck[index] = index;
  for (let left = deck.length - 1; left > 0; left -= 1) {
    const right = Math.floor(Math.random() * (left + 1));
    [deck[left], deck[right]] = [deck[right] ?? 0, deck[left] ?? 0];
  }
  return deck;
};
