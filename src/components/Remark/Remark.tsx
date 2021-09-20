import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import type { PluggableList } from 'react-markdown/lib/react-markdown';
import remarkDirective from 'remark-directive';
import Typography from '@material-ui/core/Typography';
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
import { remarkCard } from '@/tools/remark/remarkCard';
import { remarkDecklist } from '@/tools/remark/remarkDecklist';
import { remarkRow } from '@/tools/remark/remarkRow';
import { useStyles } from './Remark.styles';

const COMPONENTS: Components & {
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

interface Props {
  className?: string;
  decklists?: Decklists;
  markdown: Markdown;
}

export const Remark: FunctionComponent<Props> = ({
  className,
  decklists,
  markdown,
}) => {
  const classes = useStyles();
  const { matter, scries, text } = markdown;
  const plugins: PluggableList = [
    ...(decklists ? [remarkDecklist(decklists)] : []),
    remarkCard,
    remarkRow({ scries }),
  ];
  return (
    <div className={c(classes.root, className)}>
      {matter?.title && (
        <Typography align="center" variant="h1">
          {matter.title}
        </Typography>
      )}
      <ReactMarkdown
        components={COMPONENTS}
        remarkPlugins={[remarkDirective, ...plugins]}
        skipHtml
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};
