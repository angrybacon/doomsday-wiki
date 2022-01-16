import c from 'classnames';
import React, { FunctionComponent } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { mdiAccount, mdiCalendar, mdiChevronDown } from '@mdi/js';
import { Icon } from '@mdi/react';
import { Column } from '@/components/Decklist/Column';
import { Mana } from '@/components/Mana/Mana';
import type { Card } from '@/tools/decklists/types';
import { useStyles } from './Decklist.styles';

export interface Props {
  authors: string | null;
  colors: string[] | null;
  date?: string;
  main: Card[][];
  side?: Card[];
  title: string;
}

export const Decklist: FunctionComponent<Props> = ({
  authors,
  colors,
  main,
  date,
  side,
  title,
}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Accordion elevation={0}>
        <AccordionSummary
          classes={{ content: classes.summary, root: classes.gutters }}
          expandIcon={<Icon path={mdiChevronDown} size={1} />}
        >
          <Box alignItems="center" display="flex">
            {!!colors?.length && (
              <Box
                alignItems="center"
                display="flex"
                fontSize="caption.fontSize"
                mr={0.5}
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
              className={classes.subtitle}
              color="text.secondary"
              fontSize="caption.fontSize"
              mt={1}
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
        <AccordionDetails className={c(classes.details, classes.gutters)}>
          <Box flex={2}>
            <Typography color="textSecondary" paragraph variant="caption">
              Main
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
                Sideboard
              </Typography>
              <Box mb={2}>
                <Column cards={side} />
              </Box>
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
