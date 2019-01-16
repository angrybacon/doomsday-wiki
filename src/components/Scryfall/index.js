import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';


const styles = theme => ({
  root: {
    outline: `1px solid ${theme.palette.primary.main}`,
  },
});


class Scryfall extends React.PureComponent {

  componentDidMount() {
  }

  render() {
    const { classes, query } = this.props;
    return <span className={classes.root} children={query} />;
  }
}


export default withStyles(styles)(Scryfall);
