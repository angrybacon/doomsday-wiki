/**
 * Augment input directive with the provided extra properties.
 * Asserts that the output directive has the expected well-formed properties.
 */
export function hastify<
  TDirective extends {
    data?: { hName?: string; hProperties?: object };
    name: string;
  },
  TData extends object,
>(
  directive: TDirective,
  data: TData,
  name?: string,
): asserts directive is TDirective & {
  data: NonNullable<TDirective['data']> & {
    hProperties: NonNullable<NonNullable<TDirective['data']>['hProperties']> &
      TData;
  };
} {
  directive.data = {
    ...directive.data,
    hName: name || directive.data?.hName,
    hProperties: { ...directive.data?.hProperties, ...data },
  };
}
