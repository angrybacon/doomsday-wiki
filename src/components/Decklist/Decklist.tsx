import { mdiAccount, mdiCalendar, mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Accordion,
  accordionClasses,
  AccordionDetails,
  AccordionSummary,
  accordionSummaryClasses,
  Box,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { type FunctionComponent } from 'react';

import { Column } from '@/components/Decklist/Column';
import { Mana } from '@/components/Mana/Mana';
import { type Card } from '@/tools/decklists/types';

interface Props {
  authors: string | null;
  colors: string[] | null;
  date?: string;
  main: Card[][];
  mainCount: number;
  side: Card[];
  sideCount: number;
  title: string;
}

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
      sx={({ mixins }) => ({
        ...mixins.gutters,
        [`.${accordionSummaryClasses.content}`]: { flexDirection: 'column' },
      })}
    >
      <Box sx={{ alignItems: 'center', display: 'flex' }}>
        {!!colors?.length && (
          <Box
            alignItems="center"
            display="flex"
            fontSize="caption.fontSize"
            mr={1}
          >
            {colors.map((color, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Mana key={index} pattern={color} />
            ))}
          </Box>
        )}
        <Typography variant="body2">{title}</Typography>
      </Box>
      {(authors || date) && (
        <Box
          sx={{
            alignItems: 'center',
            color: 'text.secondary',
            display: 'flex',
            fontSize: 'caption.fontSize',
            mt: 1,
            '> *': { mr: 1 },
            '> * > *': { mr: 0.5 },
          }}
        >
          {authors && (
            <Box alignItems="center" display="flex">
              <Icon path={mdiAccount} size={0.7} />
              <span>{authors}</span>
            </Box>
          )}
          {date && (
            <Box alignItems="center" display="flex">
              <Icon path={mdiCalendar} size={0.7} />
              <span>{date}</span>
            </Box>
          )}
        </Box>
      )}
    </AccordionSummary>
    <AccordionDetails
      sx={({ mixins, palette }) => ({
        ...mixins.gutters,
        bgcolor: alpha(palette.primary.light, 0.1),
        borderTop: 1,
        borderTopColor: 'divider',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        overflowX: 'auto',
        py: 2,
      })}
    >
      <Box flex={2}>
        <Typography color="textSecondary" paragraph variant="caption">
          Main {mainCount}
        </Typography>
        <Box display="flex" flexWrap="wrap">
          {main.map((cards, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box flex={1} key={`column-${index}`} mb={2} mr={2}>
              <Column cards={cards} />
            </Box>
          ))}
        </Box>
      </Box>
      {side && (
        <Box flex={1}>
          <Typography color="textSecondary" paragraph variant="caption">
            Sideboard {sideCount}
          </Typography>
          <Box mb={2}>
            <Column cards={side} />
          </Box>
        </Box>
      )}
    </AccordionDetails>
  </Accordion>
);
