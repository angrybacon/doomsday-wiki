interface Array<T> {
  includes(item: unknown, index?: number): item is T;
}
