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
import { type ExtraProps } from 'react-markdown';

import { type Decklists } from '@/tools/decklists/types';

type Props = ExtraProps &
  PropsWithChildren & {
    decklists?: Decklists;
  };

export const RemarkAccordion: FunctionComponent<Props> = ({
  children,
  decklists,
  node,
}) => {
  if (!decklists) {
    console.error('Missing decklists in accordion', node);
    return null;
  }

  const [title, ...content] = Array.isArray(children)
    ? (children as ReactNode[])
    : [children];

  return (
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
          py: 2,
        })}
      >
        {content}
      </AccordionDetails>
    </Accordion>
  );
};
