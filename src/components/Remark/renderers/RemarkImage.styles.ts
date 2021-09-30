import { createStyles, makeStyles } from '@material-ui/core/styles';
import type { Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    description: {
      display: 'block',
      marginTop: theme.spacing(),
      textAlign: 'center',
    },
    image: {
      display: 'block',
      width: '100%',
    },
    root: {
      ...theme.mixins.barf(),
      borderColor: theme.palette.divider,
      borderBottomStyle: 'solid',
      borderTopStyle: 'solid',
      borderWidth: 1,
      display: 'block',
    },
  })
);
