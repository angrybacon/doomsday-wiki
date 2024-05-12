import { type Plugin } from 'unified';
import { remove } from 'unist-util-remove';
import { matter } from 'vfile-matter';

export const remarkMatter: Plugin = () => async (tree, file) => {
  matter(file);
  // NOTE Remove the frontmatter from the tree since we don't want to render it
  remove(tree, 'yaml');
};
