import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { remarkPile } from '@/components/Remark/plugins';
import { Heading, Pile } from '@/components/Remark/renderers';
import type { PileProps } from '@/components/Remark/renderers/types';
import type { Markdown } from '@/tools/markdown/types';

interface Props {
  className?: string;
  markdown: Markdown;
}

const components: Components & {
  pile: FunctionComponent<PileProps>;
} = {
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  pile: Pile,
};

export const Remark: FunctionComponent<Props> = ({ className, markdown }) => {
  const { content, data } = markdown;

  return (
    <div className={className}>
      {data?.title && (
        <Box textAlign="center">
          <Typography variant="h1">{data?.title}</Typography>
        </Box>
      )}
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkDirective, remarkPile]}
        skipHtml
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
