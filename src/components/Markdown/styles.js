import { makeStyles } from '@material-ui/core/styles';


export default makeStyles(theme => ({
  code: {
    borderColor: theme.palette.divider,
    borderRadius: theme.shape.borderRadius,
    borderStyle: 'solid',
    borderWidth: 1,
    overflowY: 'auto',
    padding: theme.spacing(1),
  },
  divider: {
    marginBottom: '1em',
    marginTop: '1em',
  },
  gutter: {
    marginLeft: -theme.overrides.MuiPaper.root.padding,
    width: `calc(100% + ${theme.overrides.MuiPaper.root.padding * 2 + 1}px)`,
  },
  pile: {
    display: 'flex',
    justifyContent: 'space-between',
    '@global img': {
      width: '19%',
    },
  },
  table: {overflowX: 'auto'},
}));
