import c from 'classnames';
import { GrayMatterFile } from 'gray-matter';
import Link from 'next/link';
import React, { CSSProperties, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import { useStyles } from './Article.styles';

interface Props {
  matter?: GrayMatterFile<string>['data'];
  route: string;
}

type GetBackgroundStyle = (href: string | undefined) => CSSProperties;

export const Article: FunctionComponent<Props> = ({ matter = {}, route }) => {
  const { authors, banner, date, title } = matter;
  const classes = useStyles();

  const getBackgroundStyle: GetBackgroundStyle = (href) =>
    href ? { backgroundImage: `url(${href})` } : {};

  return (
    <Card
      className={c(classes.root, { [classes.rootWithBanner]: banner })}
      style={getBackgroundStyle(banner)}
    >
      <Link href={route} passHref>
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
      </Link>
    </Card>
  );
};
