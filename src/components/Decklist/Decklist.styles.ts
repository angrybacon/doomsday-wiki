import { alpha, createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    details: {
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      borderBottomWidth: 0,
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderTopWidth: 1,
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: theme.spacing(2),
      paddingTop: theme.spacing(2),
    },
    gutters: theme.mixins.gutters(),
    root: {
      ...theme.mixins.barf(),
      borderBottomWidth: 1,
      borderColor: theme.palette.divider,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderStyle: 'solid',
      borderTopWidth: 1,
      '&:not(:last-child)': {
        marginBottom: theme.spacing(2),
      },
      '& + &': {
        borderTopWidth: 0,
        marginTop: -theme.spacing(2),
      },
    },
    subtitle: {
      alignItems: 'center',
      display: 'flex',
      '& > :not(:first-child)': {
        marginLeft: theme.spacing(1),
      },
      '& > * > :not(:first-child)': {
        marginLeft: theme.spacing(0.5),
      },
    },
    summary: {
      display: 'block',
    },
  })
);
