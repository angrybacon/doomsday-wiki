import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    chevron: {
      transition: theme.transitions.create('transform'),
    },
    pages: {
      backgroundColor: theme.palette.background.default,
    },
    selected: {
      backgroundColor: theme.palette.action.focus,
    },
  })
);
