import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 80;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      paddingTop: BANNER_OFFSET,
    },
    content: {
      backgroundColor: alpha(theme.palette.common.black, 0.5),
      borderTopColor: alpha(theme.palette.common.white, 0.2),
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      color: theme.palette.common.white,
      padding: theme.spacing(2),
    },
    kind: {
      marginLeft: theme.spacing(0.5),
    },
    root: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },
    secondary: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: theme.spacing(0.5),
    },
    tagFilled: {
      // NOTE Overwrite theme-dependent colors
      backgroundColor: alpha(theme.palette.common.white, 0.4),
      '& > *': {
        color: `${theme.palette.common.white} !important`,
      },
    },
    tags: {
      margin: theme.spacing(-0.5),
      '& > *': {
        color: theme.palette.common.white,
        borderColor: theme.palette.grey[400],
        margin: theme.spacing(0.5),
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(-0.25),
        '& > *': { margin: theme.spacing(0.25) },
      },
    },
  })
);
