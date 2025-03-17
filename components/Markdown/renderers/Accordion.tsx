import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from '@mui/material';
import { type PropsWithChildren, type ReactNode } from 'react';

export const Accordion = ({ children }: PropsWithChildren) => {
  const [title, ...content] = Array.isArray(children)
    ? (children as ReactNode[])
    : [children];
  return (
    <MuiAccordion>
      <MuiAccordionSummary expandIcon={<Icon path={mdiChevronDown} size={1} />}>
        <Typography variant="caption">{title}</Typography>
      </MuiAccordionSummary>
      <MuiAccordionDetails sx={{ display: 'grid', gap: 2 }}>
        {content}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};
