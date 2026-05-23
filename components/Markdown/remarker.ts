import { type ReadPlugin } from '@korumite/kiwi';

/** Pair a remark PLUGIN with its PARAMETERS into a typed tuple shape */
export const remarker = <TParameters extends unknown[]>(
  plugin: ReadPlugin<TParameters>,
  ...parameters: TParameters
): [ReadPlugin<TParameters>, ...TParameters] => [plugin, ...parameters];
