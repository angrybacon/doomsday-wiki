import blueGrey from '@material-ui/core/colors/blueGrey';
import pink from '@material-ui/core/colors/pink';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';


const defaultTheme = createMuiTheme();
const themeOptions = {
  mixins: {
    sidebar: {
      treshold: defaultTheme.breakpoints.down('sm'),
      width: 300,
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: defaultTheme.spacing(3),
        '&:not(:last-child)': {
          marginBottom: defaultTheme.spacing(3),
        },
      },
      rounded: {
        [defaultTheme.breakpoints.down('xs')]: {
          borderRadius: 0,
        },
      },
    },
    MuiTable: {
      root: {
        '&:not(:last-child)': {
          marginBottom: '1em',
        },
      },
    },
    MuiTableContainer: {
      root: {
        borderTopColor: defaultTheme.palette.divider,
        borderTopStyle: 'solid',
        borderTopWidth: 1,
        marginBottom: defaultTheme.spacing(3),
        '& + &': {
          borderTopStyle: 'none',
          marginTop: -defaultTheme.spacing(3),
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    MuiTableCell: {
      head: {
        lineHeight: 'inherit',
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
