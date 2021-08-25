import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';
import type { CSSProperties } from '@material-ui/core/styles/withStyles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      width: '20%',
      '& > *': {
        padding: theme.spacing(1),
      },
    },
    root: {
      backgroundColor: theme.palette.background.default,
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderWidth: 1,
      display: 'flex',
      marginBottom: theme.spacing(2),
      marginLeft: -(
        (theme.overrides?.MuiCardContent?.root as CSSProperties)?.padding ?? 0
      ),
      marginRight: -(
        (theme.overrides?.MuiCardContent?.root as CSSProperties)?.padding ?? 0
      ),
      marginTop: theme.spacing(2),
      padding: theme.spacing(2),
    },
  })
);
