import { mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  accordionSummaryClasses,
  Box,
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
} from '@mui/material';
import { type FunctionComponent } from 'react';

import { Column } from '@/components/Decklist/Column';
import { Summary } from '@/components/Decklist/Summary';
import { type Card } from '@/tools/decklists/types';

type Props = {
  authors: string | null;
  colors: string[] | null;
  date?: string;
  main: Card[][];
  mainCount: number;
  side: Card[];
  sideCount: number;
  title: string;
};

export const Decklist: FunctionComponent<Props> = ({
  authors,
  colors,
  main,
  mainCount,
  date,
  side,
  sideCount,
  title,
}) => (
  <MuiAccordion>
    <MuiAccordionSummary
      expandIcon={<Icon path={mdiChevronDown} size={1} />}
      sx={{
        [`.${accordionSummaryClasses.content}`]: { flexWrap: 'wrap', gap: 1 },
      }}
    >
      <Summary authors={authors} colors={colors} date={date} title={title} />
    </MuiAccordionSummary>
    <MuiAccordionDetails
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'space-between',
        overflowX: 'auto',
      }}
    >
      <div>
        <Typography
          gutterBottom
          sx={{ color: 'text.secondary', typography: 'caption' }}
        >
          Main {mainCount}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
          {main.map((cards, index) => (
            <Column cards={cards} key={index} />
          ))}
        </Box>
      </div>
      {side && (
        <div>
          <Typography
            gutterBottom
            sx={{ color: 'text.secondary', typography: 'caption' }}
          >
            Sideboard {sideCount}
          </Typography>
          <Column cards={side} />
        </div>
      )}
    </MuiAccordionDetails>
  </MuiAccordion>
);
