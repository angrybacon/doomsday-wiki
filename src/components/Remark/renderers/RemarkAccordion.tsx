import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { type FunctionComponent } from 'react';
import { type ReactMarkdownProps } from 'react-markdown/lib/ast-to-react';

// eslint-disable-next-line import/no-cycle
import { Remark } from '@/components/Remark/Remark';
import { type Decklists } from '@/tools/decklists/types';
import { type Partial } from '@/tools/markdown/types';

// NOTE Because this feature allows Markdown content within itself, it
//      introduces a circular reference but is controlled as long as it doesn't
//      interact with anything more than `Remark`.
//
//      Remark -> Remark/constants -> RemarkAccordion -> Remark

interface Props extends ReactMarkdownProps {
  decklists?: Decklists;
  partial?: Partial;
}

export const RemarkAccordion: FunctionComponent<Props> = ({
  children: [title, ...content] = [],
  decklists = {},
  partial,
}) => (
  <Accordion
    elevation={0}
    square
    sx={({ mixins }) => ({
      ...mixins.barf,
      borderBottom: 1,
      borderTop: 1,
      borderColor: 'divider',
      // NOTE Remove the default border for accordions within papers
      '&:before': { display: 'none' },
      '& + &': { borderTop: 0 },
      [`&.${accordionClasses.expanded}`]: { ...mixins.barf, my: 0 },
    })}
  >
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
      {partial && (
        <Remark
          decklists={decklists}
          markdown={partial}
          withScroll={false}
          withWrapper={false}
        />
      )}
    </AccordionDetails>
  </Accordion>
);
