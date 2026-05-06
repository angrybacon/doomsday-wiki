import { makeToc } from '@korumite/kiwi';
import { type Metadata } from 'next';

import { Markdown } from '@/components/Markdown/Markdown';
import { Toc } from '@/components/Toc/Toc';
import { getMarkdown } from '@/tools/markdown/getMarkdown';

export const metadata: Metadata = {
  title: 'Markdown Preview',
};

export default async () => {
  const markdown = await getMarkdown('partials', 'markdown');
  const toc = makeToc(markdown.text, { maxDepth: 3, minDepth: 2 });
  return (
    <>
      <Markdown {...markdown} sx={{ gridArea: 'content' }} />
      <Toc items={toc.items || []} sx={{ gridArea: 'toc' }} />
    </>
  );
};
