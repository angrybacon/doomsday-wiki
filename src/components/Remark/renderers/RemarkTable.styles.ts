import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cell: theme.mixins.gutters(),

    head: {
      backgroundColor: alpha(theme.palette.primary.light, 0.1),
    },

    table: {
      ...theme.mixins.barf(),
      borderTopColor: theme.palette.divider,
      borderTopStyle: 'solid',
      borderTopWidth: 1,
      overflowX: 'auto',
      '& + &': {
        borderTop: 'none',
        marginTop: '0 !important',
      },
    },
  })
);
