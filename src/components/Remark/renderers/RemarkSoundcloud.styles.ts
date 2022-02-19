import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: 'none',
      borderRadius: theme.shape.borderRadius,
      display: 'block',
      width: '100%',
    },
  })
);
