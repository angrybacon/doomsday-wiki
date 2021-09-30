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
import type { Card } from '@/tools/decklists/types';
import { useStyles } from './Decklist.styles';

export interface Props {
  authors?: string;
  date?: string;
  main: Card[][];
  side?: Card[];
  title: string;
}

export const Decklist: FunctionComponent<Props> = ({
  authors,
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
          <Typography variant="body2">{title}</Typography>
          <Typography
            className={classes.subtitle}
            color="textSecondary"
            variant="caption"
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
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={c(classes.details, classes.gutters)}>
          <Box display="flex" flex={2}>
            {main.map((cards, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <Box flex={1} key={`column-${index}`}>
                <Column cards={cards} />
              </Box>
            ))}
          </Box>
          {side && (
            <Box flex={1} ml={4} mr="1em">
              <Column cards={side} />
            </Box>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
