import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

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
