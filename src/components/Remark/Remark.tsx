import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import remarkDirective from 'remark-directive';
import type { PluggableList } from 'unified';
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
import {
  RemarkSoundcloud,
  Props as RemarkSoundcloudProps,
} from '@/components/Remark/renderers/RemarkSoundcloud';
import {
  RemarkYoutube,
  Props as RemarkYoutubeProps,
} from '@/components/Remark/renderers/RemarkYoutube';
import { RemarkText } from '@/components/Remark/renderers/RemarkText';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown } from '@/tools/markdown/types';
import { remarkBase } from '@/tools/remark/remarkBase';
import { remarkCard } from '@/tools/remark/remarkCard';
import { remarkDecklist } from '@/tools/remark/remarkDecklist';
import { remarkRow } from '@/tools/remark/remarkRow';
import { useStyles } from './Remark.styles';

const COMPONENTS: Components = {
  a: RemarkLink,
  blockquote: RemarkQuote,
  h1: RemarkHeading,
  h2: RemarkHeading,
  h3: RemarkHeading,
  h4: RemarkHeading,
  h5: RemarkHeading,
  h6: RemarkHeading,
  p: RemarkText,
};

const COMPONENTS_EXTRA: {
  card: FunctionComponent<RemarkCardProps>;
  decklist: FunctionComponent<RemarkDecklistProps>;
  row: FunctionComponent<RemarkRowProps>;
  soundcloud: FunctionComponent<RemarkSoundcloudProps>;
  youtube: FunctionComponent<RemarkYoutubeProps>;
} = {
  card: RemarkCard,
  decklist: RemarkDecklist,
  row: RemarkRow,
  soundcloud: RemarkSoundcloud,
  youtube: RemarkYoutube,
};

interface Props {
  className?: string;
  decklists: Decklists;
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
    remarkBase,
    remarkCard,
    [remarkDecklist, { decklists }],
    [remarkRow, { scries }],
  ];
  return (
    <div className={c(classes.root, className)}>
      {matter?.title && (
        <Typography align="center" variant="h1">
          {matter.title}
        </Typography>
      )}
      <ReactMarkdown
        components={{ ...COMPONENTS, ...COMPONENTS_EXTRA }}
        remarkPlugins={[remarkDirective, ...plugins]}
        skipHtml
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};
