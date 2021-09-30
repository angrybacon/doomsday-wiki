import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      ...theme.mixins.toolbar,
      justifyContent: 'space-between',
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
      [theme.breakpoints.up('sm')]: {
        ...theme.mixins.toolbar,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
      },
    },
    paper: {
      width: theme.drawer.width,
    },
  })
);
