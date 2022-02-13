import { createStyles, makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    image: {
      // NOTE Hard-coded ratio to smooth out irregularities from Scryfall data
      aspectRatio: '5 / 7',
      display: 'block',
      width: '100%',
    },
    tooltip: {
      textAlign: 'center',
    },
  })
);
