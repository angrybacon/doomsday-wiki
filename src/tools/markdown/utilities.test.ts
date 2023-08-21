import { assertCategory, assertDepth } from '@/tools/markdown/utilities';

describe(assertCategory.name, () => {
  it('should throw when the provided category is not known', () => {
    // When
    const assert = () => assertCategory('unknown');
    // Then
    expect(assert).toThrowError(/unknown category/i);
  });

  it('should not throw when the provided category is known', () => {
    // When
    const assert = () => assertCategory('meandeck');
    // Then
    expect(assert).not.toThrow();
  });
});

describe(assertDepth.name, () => {
  it('should throw when the provided items do not have the required length', () => {
    // When
    const assert = () => assertDepth([1, 2, 3], 4);
    // Then
    expect(assert).toThrowError(/malformed path/i);
  });

  it('should not throw when the provided items have the required length', () => {
    // When
    const assert = () => assertDepth([1, 2, 3], 2);
    // Then
    expect(assert).not.toThrow();
  });
});
