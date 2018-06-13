import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

import ChevronRight from 'mdi-material-ui/ChevronRight';

import withRouter from 'react-router-dom/withRouter';

import MENU from '../menu';


const styles = theme => ({
});


const getTitle = path => {
  if (path === '/') {
    return ['Home'];
  }
  const results = [];
  MENU.some(
    chapter => (
      (chapter.routes || []).some(route => route.href === path ? results.push(route.text) : false)
        ? results.unshift(chapter.label.split(',')[0])
        : false
    )
  );
  return results;
};


class Breadcrumbs extends React.Component {
  render() {
    const { location } = this.props;
    let breadcrumbs = getTitle(location.pathname);
    breadcrumbs = breadcrumbs.reduce(
      (result, it, index) => {
        result.push(<Grid item children={<Typography children={it} color="inherit" variant="title" />} key={it} />);
        if (index < breadcrumbs.length - 1) {
          result.push(<ChevronRight key={it + '-separator'} style={{margin: '0 .5em'}}/>);
        }
        return result;
      }, []
    );
    return <Grid container alignItems="center" children={breadcrumbs} />;
  }
}


export default withRouter(withStyles(styles)(Breadcrumbs));
