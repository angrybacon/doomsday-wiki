import withStyles from '@material-ui/core/styles/withStyles';
import React from 'react';


const styles = theme => ({

  // board: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'space-between',
  //   width: '100%',
  //   padding: '2em'
  // },

  // boardRoot: {
  //   boxSizing: 'border-box',
  //   display: 'flex',
  //   height: '50%',
  //   paddingBottom: '2em',
  //   paddingTop: '1em',
  //   position: 'relative',
  // },

  // boardRootOpponent: {
  //   transform: 'rotate(180deg)',
  // },

  // card: {
  //   display: 'block',
  //   height: '4em',
  // },

  // cardTapped: {
  //   transform: 'rotate(85deg)',
  // },

  // cards: {
  //   alignItems: 'center',
  //   display: 'flex',
  //   justifyContent: 'center',
  //   listStyleType: 'none',
  //   margin: 0,
  //   padding: 0,
  // },

  // graveyard: {
  //   flexDirection: 'column',
  //   position: 'absolute',
  //   bottom: 0,
  //   left: 0,
  //   marginTop: '-1em',
  // },

  // hand: {
  //   position: 'absolute',
  //   bottom: '-2em',
  //   left: 0,
  //   right: 0,
  //   padding: '2em'
  // },

  // layout: {
  //   ...theme.mixins.padding({x: true}),
  // },

  root: {
    height: '8em',
  },
});


class Card extends React.Component {

  state = {art: null, name: null, tapped: false};

  render() {
    const { classes, name, url } = this.props;
    return <img alt={name} className={classes.root} src={url} />;
  }
}


export default withStyles(styles)(Card);
