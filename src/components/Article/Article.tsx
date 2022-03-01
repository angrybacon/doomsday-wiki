import NextLink from 'next/link';
import React, { FunctionComponent } from 'react';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { ArticleKind } from '@/components/ArticleKind/ArticleKind';
import { ArticleTag } from '@/components/ArticleTag/ArticleTag';
import type { Matter } from '@/tools/markdown/types';
import { useStyles } from './Article.styles';

export interface Props {
  matter: Matter;
  route: string;
}

export const Article: FunctionComponent<Props> = ({ matter, route }) => {
  const { authors, bannerData, date, kind, tags, title } = matter;
  const classes = useStyles();

  if (!bannerData) return null;

  return (
    <Card
      className={classes.root}
      style={{ backgroundImage: `url(${bannerData.art})` }}
      title={bannerData.title}
    >
      <NextLink href={route} passHref>
        <CardActionArea className={classes.button}>
          <CardContent className={classes.content}>
            <Typography variant="h6">{title}</Typography>
            <Box className={classes.secondary}>
              <div className={classes.tags}>
                {authors && (
                  <Chip
                    classes={{ root: classes.tagFilled }}
                    icon={<Icon path={mdiAccount} size={0.5} />}
                    label={authors}
                    size="small"
                  />
                )}
                {date && (
                  <Chip
                    classes={{ root: classes.tagFilled }}
                    icon={<Icon path={mdiCalendar} size={0.5} />}
                    label={date}
                    size="small"
                  />
                )}
                {!!tags?.length &&
                  tags.map((tag) => <ArticleTag key={tag} tag={tag} />)}
              </div>
              <ArticleKind className={classes.kind} kind={kind} />
            </Box>
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};
