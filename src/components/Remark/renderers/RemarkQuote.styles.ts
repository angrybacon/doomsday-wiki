import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: theme.palette.text.secondary,
      fontStyle: 'italic',
      margin: 0,
      paddingLeft: theme.spacing(2),
      position: 'relative',
      '&:before': {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 4,
        content: '""',
        display: 'block',
        height: '100%',
        left: 0,
        position: 'absolute',
        width: 4,
      },
      '& > :first-child': {
        paddingTop: theme.spacing(),
      },
      '& > :last-child': {
        paddingBottom: theme.spacing(),
      },
    },
  })
);
