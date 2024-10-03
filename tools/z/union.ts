import { z, type Primitive, type ZodLiteral } from 'zod';

function isValidUnion<T extends ZodLiteral<unknown>>(
  literals: T[],
): literals is [T, T, ...T[]] {
  return literals.length > 1;
}

export const union = <T extends Primitive>(values: readonly T[]) => {
  const literals = values.map((value) => z.literal(value));
  if (!isValidUnion(literals)) {
    throw new Error('Minimum length required for union schemas is 2');
  }
  return z.union(literals);
};
