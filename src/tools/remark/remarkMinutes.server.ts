import readingTime from 'reading-time';
import { type Plugin } from 'unified';
import { type Literal } from 'unist';
import { visit } from 'unist-util-visit';

export const remarkMinutes: Plugin = () => async (tree, file) => {
  let text = '';
  visit(tree, 'text', (node) => {
    text += (node as Literal).value;
  });
  const { minutes } = readingTime(text);
  console.log(minutes);
  file.data.minutes = Math.ceil(minutes);
};
