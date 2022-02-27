import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import type { Matter } from '@/tools/markdown/types';
import { useStyles } from './Article.styles';

export interface Props {
  matter: Matter;
  route: string;
}

export const Article: FunctionComponent<Props> = ({ matter, route }) => {
  const { authors, bannerData, date, title } = matter;
  const classes = useStyles();

  if (!bannerData) return null;

  return (
    <Card
      className={classes.root}
      style={{ backgroundImage: `url(${bannerData.art})` }}
      title={bannerData.title}
    >
      <NextLink href={route} passHref>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography variant="h6">{title}</Typography>
            <Box className={classes.details}>
              {authors && (
                <Box
                  fontSize="caption.fontSize"
                  sx={{ alignItems: 'center', display: 'flex' }}
                >
                  <Icon path={mdiAccount} size={0.7} />
                  <Box sx={{ ml: 0.5 }}>{authors}</Box>
                </Box>
              )}
              {date && (
                <Box
                  fontSize="caption.fontSize"
                  sx={{ alignItems: 'center', display: 'flex' }}
                >
                  <Icon path={mdiCalendar} size={0.7} />
                  <Box sx={{ ml: 0.5 }}>{date}</Box>
                </Box>
              )}
            </Box>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};
