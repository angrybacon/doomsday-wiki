import { Link } from 'gatsby';
import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { SidebarContext } from '../../contexts/Sidebar';
import { ThemeContext } from '../../contexts/Theme';
import useStyles from './styles';


export default function SidebarHeader() {
  const { toggleDrawer } = useContext(SidebarContext);
  const { dark, onToggle: onToggleTheme } = useContext(ThemeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.mixins.sidebar.treshold);
  const classes = useStyles();
  return (
    <Toolbar>
      <Grid container alignItems="center" className={classes.root} justify="space-between">
        <Grid item>
          <Link style={{textDecoration: 'none'}} to="/">
            <Button children="ddft.wiki"
                    color="primary"
                    onClick={toggleDrawer(false)}
                    size={isMobile ? 'small' : 'medium'}
                    style={{boxShadow: 'none'}}
                    variant="contained" />
          </Link>
        </Grid>
        <Switch checked={dark} onChange={onToggleTheme} size={isMobile ? 'small' : 'medium'} />
      </Grid>
    </Toolbar>
  );
}
