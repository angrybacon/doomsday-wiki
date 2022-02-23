import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      ...theme.mixins.barf,
      // NOTE Increase specificity
      '&&': {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
      },
    },
  })
);
