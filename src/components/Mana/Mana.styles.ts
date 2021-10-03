import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      fontSize: '.8em',
      marginLeft: theme.spacing(0.125),
      marginRight: theme.spacing(0.125),
      verticalAlign: 'initial',
    },
  })
);
