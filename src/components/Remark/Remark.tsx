import c from 'classnames';
import React, { FunctionComponent } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkDirective from 'remark-directive';
import remarkGfm from 'remark-gfm';
import type { PluggableList } from 'unified';
import Typography from '@material-ui/core/Typography';
import { COMPONENTS, COMPONENTS_EXTRA } from '@/components/Remark/constants';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown } from '@/tools/markdown/types';
import { remarkBase } from '@/tools/remark/remarkBase';
import { remarkCard } from '@/tools/remark/remarkCard';
import { remarkDecklist } from '@/tools/remark/remarkDecklist';
import { remarkMana } from '@/tools/remark/remarkMana';
import { remarkRow } from '@/tools/remark/remarkRow';
import { useStyles } from './Remark.styles';

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
    remarkMana,
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
        remarkPlugins={[remarkDirective, remarkGfm, ...plugins]}
        skipHtml
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};
