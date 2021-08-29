import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { remarkRow } from '@/components/Remark/plugins/remarkRow';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
import { RemarkQuote } from '@/components/Remark/renderers/RemarkQuote';
import {
  RemarkRow,
  Props as RemarkRowProps,
} from '@/components/Remark/renderers/RemarkRow';
import { RemarkText } from '@/components/Remark/renderers/RemarkText';
import type { Markdown } from '@/tools/markdown/types';
import { useStyles } from './Remark.styles';

interface Props {
  className?: string;
  markdown: Markdown;
}

const components: Components & {
  row: FunctionComponent<RemarkRowProps>;
} = {
  a: RemarkLink,
  blockquote: RemarkQuote,
  h1: RemarkHeading,
  h2: RemarkHeading,
  h3: RemarkHeading,
  h4: RemarkHeading,
  h5: RemarkHeading,
  h6: RemarkHeading,
  p: RemarkText,
  row: RemarkRow,
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
