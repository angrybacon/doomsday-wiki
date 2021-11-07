import c from 'classnames';
import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
// eslint-disable-next-line import/no-cycle
import { Remark } from '@/components/Remark/Remark';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown, Partials } from '@/tools/markdown/types';
import { useStyles } from './RemarkAccordion.styles';

// NOTE This module introduces a circular reference but is controlled as long as
//      it doesn't interact with anything more than `Remark`.
//
//      Remark -> Remark/constants -> RemarkAccordion -> Remark

export interface Props extends ReactMarkdownProps {
  decklists: Decklists;
  markdown: Markdown;
  partials: Partials;
  path: string;
  node: ReactMarkdownProps['node'];
}

export const RemarkAccordion: FunctionComponent<Props> = ({
  children,
  decklists,
  markdown,
  partials,
  path,
}) => {
  const classes = useStyles();
  const title = children ?? path;
  return (
    <div className={classes.root}>
      <Accordion elevation={0}>
        <AccordionSummary
          className={classes.gutters}
          expandIcon={<Icon path={mdiChevronDown} size={1} />}
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails className={c(classes.details, classes.gutters)}>
          <Remark
            decklists={decklists}
            markdown={markdown}
            partials={partials}
          />
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
