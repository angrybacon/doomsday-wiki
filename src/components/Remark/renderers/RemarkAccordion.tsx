import React, { FunctionComponent } from 'react';
import type { ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';
import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
// eslint-disable-next-line import/no-cycle
import { Remark } from '@/components/Remark/Remark';
import type { Decklists } from '@/tools/decklists/types';
import type { Markdown, Partials } from '@/tools/markdown/types';

// NOTE Because this feature allows Markdown content within itself, it
//      introduces a circular reference but is controlled as long as it doesn't
//      interact with anything more than `Remark`.
//
//      Remark -> Remark/constants -> RemarkAccordion -> Remark

export interface Props extends ReactMarkdownProps {
  decklists: Decklists;
  markdown?: Markdown;
  partials: Partials;
}

export const RemarkAccordion: FunctionComponent<Props> = ({
  children,
  decklists,
  markdown,
  partials,
}) => {
  const [title, ...content] = children;

  if (!title) return null;

  return (
    <Box
      sx={(theme) => ({
        ...theme.mixins.barf,
        border: 1,
        borderColor: 'divider',
        borderLeft: 0,
        borderRight: 0,
        '& + &': { borderTop: 0, mt: '0!important' },
      })}
    >
      <Accordion elevation={0}>
        <AccordionSummary
          expandIcon={<Icon path={mdiChevronDown} size={1} />}
          sx={(theme) => theme.mixins.gutters}
        >
          <Typography component="div">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={(theme) => ({
            ...theme.mixins.gutters,
            bgcolor: alpha(theme.palette.primary.light, 0.1),
            borderTop: 1,
            borderTopColor: 'divider',
            py: 2,
            '& h6:first-of-type': { mt: 0 },
          })}
        >
          {content}
          {markdown && (
            <Remark
              decklists={decklists}
              markdown={markdown}
              partials={partials}
            />
          )}
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
