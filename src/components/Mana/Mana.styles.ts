import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

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
