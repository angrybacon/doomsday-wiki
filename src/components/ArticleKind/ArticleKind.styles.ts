import { Theme, alpha } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      backgroundColor: alpha(theme.palette.articleKinds.article, 0.2),
      color: theme.palette.articleKinds.article,
    },
    primer: {
      backgroundColor: alpha(theme.palette.articleKinds.primer, 0.2),
      color: theme.palette.articleKinds.primer,
    },
    report: {
      backgroundColor: alpha(theme.palette.articleKinds.report, 0.2),
      color: theme.palette.articleKinds.report,
    },
    root: {
      borderColor: 'unset',
    },
  })
);
