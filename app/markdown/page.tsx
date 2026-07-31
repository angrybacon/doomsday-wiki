import type { Metadata } from 'next';

import { Markdown } from '~/components/Markdown/Markdown';
import { getMarkdown } from '~/tools/markdown/getMarkdown';

export const metadata: Metadata = {
  title: 'Markdown Guidelines',
};

export default async () => {
  const markdown = await getMarkdown('partials', 'markdown');
  return <Markdown {...markdown} />;
};
