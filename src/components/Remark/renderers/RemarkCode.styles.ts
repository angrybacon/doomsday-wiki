import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    block: {
      ...theme.mixins.gutters,
      fontFamily: 'monospace',
      fontSize: '0.8em',
      margin: 0,
      padding: theme.spacing(),
    },
    inline: {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
      borderRadius: 4,
      borderStyle: 'hidden',
      color: theme.palette.text.secondary,
      fontFamily: 'monospace',
      fontSize: theme.typography.body2.fontSize,
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    root: {
      ...theme.mixins.barf,
      display: 'block',
    },
  })
);
