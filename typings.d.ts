interface ObjectConstructor {
  assign<T extends object, U>(target: T, source: U): asserts target is T & U;
}

/** Spell out all properties for a given type parameter */
type Prettify<T> = { [K in keyof T]: T[K] } & {};

// NOTE Next removed declarations for CSS so we add them back.
//      We need those for the Mana font.
declare module '*.css' {}
