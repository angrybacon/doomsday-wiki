import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

const defaultTheme = createMuiTheme();
const sidebarTreshold = defaultTheme.breakpoints.down('sm');

const barf = (styles = {}) => ({
  marginLeft: -defaultTheme.spacing(3),
  marginRight: -defaultTheme.spacing(3),
  ...styles,
  [sidebarTreshold]: {
    marginLeft: -defaultTheme.spacing(2),
    marginRight: -defaultTheme.spacing(2),
    ...styles[sidebarTreshold],
  },
});

const gutters = (styles = {}) => ({
  paddingBottom: defaultTheme.spacing(3),
  paddingLeft: defaultTheme.spacing(3),
  paddingRight: defaultTheme.spacing(3),
  paddingTop: defaultTheme.spacing(3),
  ...styles,
  [sidebarTreshold]: {
    paddingBottom: defaultTheme.spacing(2),
    paddingLeft: defaultTheme.spacing(2),
    paddingRight: defaultTheme.spacing(2),
    paddingTop: defaultTheme.spacing(2),
    ...styles[sidebarTreshold],
  },
});

const themeOptions = {

  mixins: {
    barf,
    gutters,
    sidebar: {
      treshold: sidebarTreshold,
      width: 320,
    },
  },

  overrides: {
    MuiListItemIcon: {
      root: {
        minWidth: 48,
      },
    },
    MuiTypography: {
      gutterBottom: {
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        '&:not(:first-child)': {
          marginTop: '1.5em',
        },
        marginBottom: '1.5em',
      },
    },
  },
};

export const lightTheme = createMuiTheme(Object.assign({}, themeOptions, {palette: {
  background: {secondary: blueGrey.A100},
  primary: blueGrey,
  secondary: pink,
}}));

export const darkTheme = createMuiTheme(Object.assign({}, themeOptions, {palette: {
  background: {secondary: blueGrey.A700},
  primary: blueGrey,
  secondary: pink,
  type: 'dark',
}}));
