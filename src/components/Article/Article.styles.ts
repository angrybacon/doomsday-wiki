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
      overflow: 'hidden',
      position: 'relative',
    },
    rootWithBanner: {
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: theme.palette.common.white,
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
