import { FunctionComponent } from 'react';
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
import type { Partial } from '@/tools/markdown/types';

// NOTE Because this feature allows Markdown content within itself, it
//      introduces a circular reference but is controlled as long as it doesn't
//      interact with anything more than `Remark`.
//
//      Remark -> Remark/constants -> RemarkAccordion -> Remark

interface Props extends ReactMarkdownProps {
  decklists: Decklists;
  partial?: Partial;
}

export const RemarkAccordion: FunctionComponent<Props> = ({
  children: [title = 'Expand', ...content] = [],
  decklists,
  partial: markdown,
}) => (
  <Box
    sx={({ mixins }) => ({
      ...mixins.barf,
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
        sx={({ mixins }) => mixins.gutters}
      >
        <Typography component="div">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={({ mixins, palette }) => ({
          ...mixins.gutters,
          bgcolor: alpha(palette.primary.light, 0.1),
          borderTop: 1,
          borderTopColor: 'divider',
          py: 2,
          '& h6:first-of-type': { mt: 0 },
          '> :not(p:first-of-type)': { mt: 2 },
        })}
      >
        {content}
        {markdown && (
          <Remark
            decklists={decklists}
            markdown={markdown}
            withWrapper={false}
          />
        )}
      </AccordionDetails>
    </Accordion>
  </Box>
);
