import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import remarkDirective from 'remark-directive';
import Typography from '@material-ui/core/Typography';
import { remarkCard } from '@/components/Remark/plugins/remarkCard';
import { remarkDecklist } from '@/components/Remark/plugins/remarkDecklist';
import { remarkRow } from '@/components/Remark/plugins/remarkRow';
import {
  RemarkCard,
  Props as RemarkCardProps,
} from '@/components/Remark/renderers/RemarkCard';
import {
  RemarkDecklist,
  Props as RemarkDecklistProps,
} from '@/components/Remark/renderers/RemarkDecklist';
import { RemarkHeading } from '@/components/Remark/renderers/RemarkHeading';
import { RemarkLink } from '@/components/Remark/renderers/RemarkLink';
import { RemarkQuote } from '@/components/Remark/renderers/RemarkQuote';
import {
  RemarkRow,
  Props as RemarkRowProps,
} from '@/components/Remark/renderers/RemarkRow';
import { RemarkText } from '@/components/Remark/renderers/RemarkText';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown } from '@/tools/markdown/types';
import { useStyles } from './Remark.styles';

interface Props {
  className?: string;
  decklists?: Decklists;
  markdown: Markdown;
}

const components: Components & {
  card: FunctionComponent<RemarkCardProps>;
  decklist: FunctionComponent<RemarkDecklistProps>;
  row: FunctionComponent<RemarkRowProps>;
} = {
  a: RemarkLink,
  blockquote: RemarkQuote,
  card: RemarkCard,
  decklist: RemarkDecklist,
  h1: RemarkHeading,
  h2: RemarkHeading,
  h3: RemarkHeading,
  h4: RemarkHeading,
  h5: RemarkHeading,
  h6: RemarkHeading,
  p: RemarkText,
  row: RemarkRow,
};

export const Remark: FunctionComponent<Props> = ({
  className,
  decklists,
  markdown,
}) => {
  const classes = useStyles();
  const { content, data } = markdown;
  const plugins: PluggableList = [
    ...(decklists ? [remarkDecklist(decklists)] : []),
    remarkCard,
    remarkRow,
  ];
  return (
    <div className={c(classes.root, className)}>
      {data?.title && (
        <Typography align="center" variant="h1">
          {data.title}
        </Typography>
      )}
      <ReactMarkdown
        components={components}
        remarkPlugins={[remarkDirective, ...plugins]}
        skipHtml
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};
