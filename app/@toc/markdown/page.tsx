import { Toc } from '~/components/Toc/Toc';
import { getMarkdown } from '~/tools/markdown/getMarkdown';

export default async () => {
  const { toc } = await getMarkdown('partials', 'markdown');
  return <Toc toc={toc} />;
};
