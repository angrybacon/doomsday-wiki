import type { Metadata } from 'next';

import { Markdown } from '~/components/Markdown/Markdown';
import { getMarkdown } from '~/tools/markdown/getMarkdown';

export const metadata: Metadata = {
  title: 'Licenses and Resources',
};

export default async () => {
  const markdown = await getMarkdown('partials', 'license');
  return <Markdown {...markdown} />;
};
