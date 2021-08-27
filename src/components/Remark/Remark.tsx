import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { remarkRow } from '@/components/Remark/plugins';
import { Heading, Row, Text } from '@/components/Remark/renderers';
import type { RowProps } from '@/components/Remark/renderers/types';
import type { Markdown } from '@/tools/markdown/types';
import { useStyles } from '@/components/Remark/Remark.styles';

interface Props {
  className?: string;
  markdown: Markdown;
}

const components: Components & {
  row: FunctionComponent<RowProps>;
} = {
  h1: Heading,
  h2: Heading,
  h3: Heading,
  h4: Heading,
  h5: Heading,
  h6: Heading,
  p: Text,
  row: Row,
};

export const Remark: FunctionComponent<Props> = ({ className, markdown }) => {
  const classes = useStyles();
  const { content, data } = markdown;
  const plugins = [remarkDirective, remarkRow];
  return (
    <div className={c(classes.root, className)}>
      {data?.title && (
        <Box textAlign="center">
          <Typography gutterBottom variant="h1">
            {data.title}
          </Typography>
        </Box>
      )}
      <ReactMarkdown components={components} remarkPlugins={plugins} skipHtml>
        {content}
      </ReactMarkdown>
    </div>
  );
};
