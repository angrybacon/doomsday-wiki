import c from 'classnames';
import { GrayMatterFile } from 'gray-matter';
import NextLink from 'next/link';
import React, { CSSProperties, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import { useStyles } from './Article.styles';

export interface Props {
  matter?: GrayMatterFile<string>['data'];
  route: string;
}

export const Article: FunctionComponent<Props> = ({ matter = {}, route }) => {
  const { authors, banner, bannerArtist, bannerName, date, title } = matter;
  const classes = useStyles();

  const cardBackground: CSSProperties = banner
    ? { backgroundImage: `url(${banner})` }
    : {};

  const cardTitle: string | undefined = bannerName
    ? bannerArtist
      ? `${bannerName} by ${bannerArtist}`
      : `${bannerName}`
    : undefined;

  return (
    <Card
      className={c(classes.root, { [classes.rootWithBanner]: banner })}
      style={cardBackground}
      title={cardTitle}
    >
      <NextLink href={route} passHref>
        <CardActionArea>
          <CardContent className={classes.content}>
            <Typography variant="h6">{title || route}</Typography>
            {!!authors && (
              <Box
                alignItems="center"
                className={classes.subtitle}
                display="flex"
                fontSize="caption.fontSize"
              >
                <Icon path={mdiAccount} size={0.7} />
                <span>{authors}</span>
              </Box>
            )}
            {!!date && (
              <Box
                alignItems="center"
                className={classes.subtitle}
                display="flex"
                fontSize="caption.fontSize"
              >
                <Icon path={mdiCalendar} size={0.7} />
                <span>{date}</span>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </NextLink>
    </Card>
  );
};
