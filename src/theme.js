import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = createMuiTheme();
const themeOptions = {

  mixins: {
    barf: (styles = {}) => ({
      marginLeft: -defaultTheme.spacing(3),
      marginRight: -defaultTheme.spacing(3),
      ...styles,
      [defaultTheme.breakpoints.down('sm')]: {
        marginLeft: -defaultTheme.spacing(2),
        marginRight: -defaultTheme.spacing(2),
        ...styles[defaultTheme.breakpoints.down('sm')],
      },
    }),
    gutters: (styles = {}) => ({
      padding: defaultTheme.spacing(3),
      ...styles,
      [defaultTheme.breakpoints.down('sm')]: {
        padding: defaultTheme.spacing(2),
        ...styles[defaultTheme.breakpoints.down('sm')],
      },
    }),
    sidebar: {
      treshold: defaultTheme.breakpoints.down('sm'),
      width: 300,
    },
  },

  overrides: {
    MuiTypography: {
      gutterBottom: {
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
        '&:not(:first-child)': {
          marginTop: '1em',
        },
        marginBottom: '1em',
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
