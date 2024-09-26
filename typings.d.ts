interface ObjectConstructor {
  assign<T extends object, U>(target: T, source: U): asserts target is T & U;
}

interface String {
  toLowerCase<T extends string>(this: T): Lowercase<T>;
  toUpperCase<T extends string>(this: T): Uppercase<T>;
  split(separator: ''): string[];
  split(separator: string): [first: string, ...rest: string[]];
}

/** Spell out all properties for a given type parameter. */
type Prettify<T> = { [K in keyof T]: T[K] } & {};
