import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 80;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2),
    },
    root: {
      position: 'relative',
    },
    rootWithBanner: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: theme.palette.common.white,
      '&:before': {
        backdropFilter: 'blur(4px)',
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
