import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = createMuiTheme({
  typography: {useNextVariants: true},
});

const themeOptions = {
  mixins: {
    toolbar: {...defaultTheme.mixins.toolbar, minHeight: 48},
  },
  overrides: {
    MuiPaper: {
      root: {
        marginBottom: defaultTheme.spacing.unit * 2,
        [defaultTheme.breakpoints.up('md')]: {
          marginBottom: defaultTheme.spacing.unit * 3,
        },
      }
    },
    MuiTableRow: {head: {height: 48}},
    MuiTypography: {title: {fontWeight: 'normal'}},
  },
  typography: {useNextVariants: true},
};

export const lightTheme = createMuiTheme(Object.assign({}, themeOptions, {palette: {
  primary: {main: blueGrey[800]},
  secondary: pink,
}}));

export const darkTheme = createMuiTheme(Object.assign({}, themeOptions, {palette: {
  primary: {main: blueGrey[800]},
  secondary: pink,
  type: 'dark',
}}));
