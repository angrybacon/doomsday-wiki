import { alpha, createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 80;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
);
