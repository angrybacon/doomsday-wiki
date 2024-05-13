import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionSummary,
  alpha,
} from '@mui/material';
import {
  PropsWithChildren,
  type FunctionComponent,
  type ReactNode,
} from 'react';

export const RemarkAccordion: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  const [title, ...content] = Array.isArray(children)
    ? (children as ReactNode[])
    : [children];
  return (
    <Accordion
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
      <AccordionSummary
        expandIcon={<Icon path={mdiChevronDown} size={1} />}
        sx={({ mixins }) => mixins.gutters}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails
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
      </AccordionDetails>
    </Accordion>
  );
};
