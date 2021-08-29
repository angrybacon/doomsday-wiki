import { alpha, createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';
import type { CSSProperties } from '@material-ui/core/styles/withStyles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      '& > *': {
        padding: theme.spacing(1),
      },
    },

    centered: {
      justifyContent: 'space-around',
      '& $card': {
        maxWidth: '25%',
      },
    },

    pile: {
      backgroundColor: alpha(theme.palette.primary.main, 0.2),
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      marginLeft: -(
        (theme.overrides?.MuiCardContent?.root as CSSProperties)?.padding ?? 0
      ),
      marginRight: -(
        (theme.overrides?.MuiCardContent?.root as CSSProperties)?.padding ?? 0
      ),
      padding: theme.spacing(2),

      '& $card': {
        width: '20%',
      },
    },

    root: {
      display: 'flex',
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(2),
    },
  })
);
