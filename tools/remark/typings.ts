import { type Transformer } from 'unified';
import { type Node } from 'unist';

/**
 * Augment the existing `Plugin` typing from `unified` so that the contained
 * transformer has to return the new expected node type.
 * This is useful in order to enforce that each user-defined plugin correctly
 * augment the main node with the new data.
 */
export type Remarker<
  TOptions extends unknown[] = unknown[],
  TOutput extends object = object,
  TNode extends Node = Node,
> = (
  ...options: TOptions
) => (
  ...parameters: Parameters<Transformer<TNode, TNode & TOutput>>
) => (TNode & TOutput) | Promise<TNode & TOutput>;
