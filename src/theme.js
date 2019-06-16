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
    MuiTable: {
      root: {
        '&:not(:last-child)': {
          marginBottom: '1em',
        },
      },
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
  text: {
    disabled: 'rgba(255, 255, 255, 0.4)',
    hint: 'rgba(255, 255, 255, 0.4)',
    icon: 'rgba(255, 255, 255, 0.4)',
    primary: 'rgba(255, 255, 255, 0.8)',
    secondary: 'rgba(255, 255, 255, 0.6)',
  },
  type: 'dark',
}}));
