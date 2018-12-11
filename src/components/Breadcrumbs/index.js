import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ChevronRightIcon from 'mdi-react/ChevronRightIcon';
import withRouter from 'react-router-dom/withRouter';

import menu from '../../menu';


const getTitle = path => {
  if (path === '/') {
    return ['Home'];
  }
  const results = [];
  menu.some(
    chapter => (
      (chapter.routes || []).some(route => route.href === path ? results.push(route.text) : false)
        ? results.unshift(chapter.label)
        : false
    )
  );
  return results;
};


class Breadcrumbs extends React.PureComponent {
  render() {
    const { location } = this.props;
    let breadcrumbs = getTitle(location.pathname);
    breadcrumbs = breadcrumbs.reduce((accumulator, it, index) => {
      accumulator.push(
        <Grid item key={it}>
          <Typography children={it} color="inherit" variant="h6" />
        </Grid>
      );
      if (index < breadcrumbs.length - 1) {
        accumulator.push(<ChevronRightIcon key={it + '-separator'} style={{margin: '0 .5em'}}/>);
      }
      return accumulator;
    }, []);
    return <Grid container alignItems="center" children={breadcrumbs} />;
  }
}


export default withRouter(Breadcrumbs);
