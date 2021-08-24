import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Heading } from '@/components/Remark/renderers';
import type { Markdown } from '@/tools/markdown/types';

interface Props {
  className?: string;
  markdown: Markdown;
}

const components: Components = {
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
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
      <ReactMarkdown components={components} skipHtml>
        {content}
      </ReactMarkdown>
    </div>
  );
};
