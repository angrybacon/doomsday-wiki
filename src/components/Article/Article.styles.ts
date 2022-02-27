import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

/** Vertical height that should be added for the banner, if any. */
const BANNER_OFFSET = 80;

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      color: theme.palette.common.white,
      padding: theme.spacing(2),
    },
    details: {
      alignItems: 'center',
      color: alpha(theme.palette.common.white, 0.7),
      display: 'flex',
      '& > :not(:first-child)': {
        marginLeft: theme.spacing(1),
      },
    },
    root: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      overflow: 'hidden',
      position: 'relative',
      '& $content': {
        backdropFilter: 'blur(4px)',
        backgroundColor: alpha(theme.palette.common.black, 0.3),
        // NOTE Fix rounded corners not clipping on Safari
        borderBottomLeftRadius: theme.shape.borderRadiusPaper,
        borderBottomRightRadius: theme.shape.borderRadiusPaper,
        borderTopColor: alpha(theme.palette.common.white, 0.2),
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        marginTop: BANNER_OFFSET,
        [theme.breakpoints.only('xs')]: {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  })
);
