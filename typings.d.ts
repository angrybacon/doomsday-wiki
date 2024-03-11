interface ObjectConstructor {
  assign<T extends object, U>(target: T, source: U): asserts target is T & U;
}

interface String {
  split(separator: ''): string[];
  split(separator: string): [first: string, ...rest: string[]];
}
