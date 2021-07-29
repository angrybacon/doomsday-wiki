import c from 'classnames';
import { GrayMatterFile } from 'gray-matter';
import React, { CSSProperties, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Theme, alpha, makeStyles } from '@material-ui/core/styles';
import { mdiAccount, mdiCalendar } from '@mdi/js';
import Icon from '@mdi/react';
import { Link } from '@/components/Link/Link';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 80;

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    position: 'relative',
  },
  cardWithBanner: {
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    color: theme.palette.common.white,
    '&:before': {
      backdropFilter: 'blur(2px)',
      backgroundColor: alpha(theme.palette.common.black, 0.3),
      borderTopColor: alpha(theme.palette.common.white, 0.2),
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      bottom: 0,
      content: '""',
      display: 'block',
      left: 0,
      position: 'absolute',
      right: 0,
      top: BANNER_OFFSET,
    },
    '& > *': {
      paddingTop: BANNER_OFFSET,
    },
  },
  subtitle: {
    marginTop: theme.spacing(0.5),
    opacity: 0.75,
    '& > :not(:first-child)': {
      marginLeft: theme.spacing(0.5),
    },
  },
}));

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
      className={c(classes.card, { [classes.cardWithBanner]: banner })}
      style={getBackgroundStyle(banner)}
    >
      <Link href={route} passHref>
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{title || route}</Typography>
            {!!authors && (
              <Box
                alignItems="center"
                className={classes.subtitle}
                display="flex"
                fontSize="caption.fontSize"
              >
                <Icon path={mdiAccount} size={1} />
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
                <Icon path={mdiCalendar} size={1} />
                <span>{date}</span>
              </Box>
            )}
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};
