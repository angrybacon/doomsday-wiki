import { type ExtraProps } from 'react-markdown';

export type Hastified<TPayload extends Record<string, unknown>> = Omit<
  NonNullable<ExtraProps['node']>,
  'properties'
> & { properties: Partial<TPayload> };
