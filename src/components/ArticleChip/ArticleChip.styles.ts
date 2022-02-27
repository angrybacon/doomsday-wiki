import { Theme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      borderColor: 'unset',
      color: theme.palette.articleKinds.article,
      cursor: 'unset',
    },
    primer: {
      borderColor: 'unset',
      color: theme.palette.articleKinds.primer,
      cursor: 'unset',
    },
    report: {
      borderColor: 'unset',
      color: theme.palette.articleKinds.report,
      cursor: 'unset',
    },
  })
);
