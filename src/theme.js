import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = createMuiTheme({
  typography: {useNextVariants: true},
});

const themeOptions = {
  mixins: {
    sidebar: {
      treshold: 'sm',
      width: 300,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: defaultTheme.spacing.unit * 3,
        '&:not(:last-child)': {
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
