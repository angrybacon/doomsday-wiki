import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from '@mui/material';
import { type ReactNode } from 'react';
import { type ExtraProps } from 'react-markdown';

import { RemarkError } from '@/tools/remark/RemarkError';

type Props = ExtraProps & {
  children?: ReactNode;
  path?: string;
};

export const Accordion = ({ children, node, path }: Props) => {
  const [title, ...content] = Array.isArray(children)
    ? (children as ReactNode[])
    : [children];
  if (!content) throw new RemarkError('Missing content', { node, path });
  if (!title) throw new RemarkError('Missing title', { node, path });
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
