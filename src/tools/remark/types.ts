import type { Plugin } from 'unified';
import { Node } from 'unist-util-visit';

export type Remarker<T = void> = (context: T) => Plugin;

export type RemarkerAsync<T> = () => (tree: Node) => Promise<T>;
