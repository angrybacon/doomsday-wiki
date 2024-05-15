import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  accordionClasses,
  alpha,
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
} from '@mui/material';
import {
  type FunctionComponent,
  type PropsWithChildren,
  type ReactNode,
} from 'react';

export const Accordion: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [title, ...content] = Array.isArray(children)
    ? (children as ReactNode[])
    : [children];
  return (
    <MuiAccordion
      elevation={0}
      sx={({ mixins }) => ({
        ...mixins.barf,
        borderBottom: 1,
        borderBottomColor: 'divider',
        borderTop: 1,
        borderTopColor: 'divider',
        '&:before': { display: 'none' },
        [`&.${accordionClasses.expanded}`]: { ...mixins.barf, my: 0 },
        '& + &': { borderTop: 0 },
      })}
    >
      <MuiAccordionSummary
        expandIcon={<Icon path={mdiChevronDown} size={1} />}
        sx={({ mixins }) => mixins.gutters}
      >
        {title}
      </MuiAccordionSummary>
      <MuiAccordionDetails
        sx={({ mixins, palette }) => ({
          ...mixins.gutters,
          bgcolor: alpha(palette.primary.light, 0.1),
          borderTop: 1,
          borderTopColor: 'divider',
          display: 'grid',
          gap: 3,
          py: 3,
        })}
      >
        {content}
      </MuiAccordionDetails>
    </MuiAccordion>
  );
};
