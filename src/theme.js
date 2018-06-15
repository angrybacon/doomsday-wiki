import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = createMuiTheme();

const themeOptions = {
  mixins: {
    padding: (options = {x: true, y: true}) => ({
      paddingBottom: options.y ? defaultTheme.spacing.unit * 3 : 0,
      paddingLeft: options.x ? defaultTheme.spacing.unit * 3 : 0,
      paddingRight: options.x ? defaultTheme.spacing.unit * 3 : 0,
      paddingTop: options.y ? defaultTheme.spacing.unit * 3 : 0,
      [defaultTheme.breakpoints.up('md')]: {
        paddingBottom: options.y ? defaultTheme.spacing.unit * 4 : 0,
        paddingLeft: options.x ? defaultTheme.spacing.unit * 4 : 0,
        paddingRight: options.x ? defaultTheme.spacing.unit * 4 : 0,
        paddingTop: options.y ? defaultTheme.spacing.unit * 4 : 0,
      },
    }),
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
