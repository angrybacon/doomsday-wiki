import { StaticQuery, graphql } from 'gatsby';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from '@material-ui/core/Grid';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Puzzle from './Puzzle.js';

import '../reset.scss';

const styles = theme => ({
  body: {
    flexGrow: 1,
    overflowY: 'auto',
    paddingTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(3),
    },
  },
  children: {
    flexGrow: 1,
  },
  content: {
    height: '100%',
  },
  footer: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginBottom: theme.spacing(3),
      marginTop: theme.spacing(3),
    },
  },
  main: {
    height: '100%',
    paddingLeft: theme.mixins.sidebar.width,
    width: '100%',
    [theme.breakpoints.down(theme.mixins.sidebar.treshold)]: {
      paddingLeft: 0,
    },
  },
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100%',
    minWidth: 320,
  },
});

class PuzzlesPage extends React.PureComponent {
  
  render() { 
    const { classes } = this.props;
    const query = graphql`{
      allFile(filter: {extension: {eq: "yaml"}}) {
        edges {
          node {
            name
            childPuzzlesYaml {
              puzzles {
                deckFile
                oppHand
                oppBoard
                yourHand
                yourBoard
                situationNotes
                solution
                solutionNotes
              }
            }
          }
        }
      }
    }`;
    
    return <StaticQuery query={query} render={({ allFile }) => (
      <Grid item className={classes.body}>
        <Paper>
          <Typography gutterBottom variant="h3">Doomsday Puzzles</Typography>
          <Typography gutterBottom >Feel like you have a handle on how to play the deck? Test your knowledge with these puzzles!
            They range from simple checks of fundamental understanding, to pain-inducing unrealsitic situations you'll likely never
            encounter in the wild. Note that some puzzles may have alternative solutions to the one's provided. And don't forget to look at 
            the reference decklists; different variants of the deck will play different cards that can significantly impact possible piles.
          </Typography>

          {allFile.edges.map((it, index) => {
            const {name, childPuzzlesYaml} = it.node;
            return (
              <div key={index}>
                <hr/>
                <br/>
                <Typography key={index} gutterBottom variant="h4">{name} Puzzles </Typography>
                {childPuzzlesYaml.puzzles.map( (child, index) => {
                    return (<Puzzle index={index} puzzleDetails={child}/>);                
                } )}
              </div>
            );
        })}
        </Paper>
      </Grid> 
     )} />;
  }
}

export default withStyles(styles)(PuzzlesPage);