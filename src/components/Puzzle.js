import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import withStyles from '@material-ui/core/styles/withStyles';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import Decklist from './Decklist';


const styles = theme => ({
  panel: {
    marginBottom: theme.spacing(2),
    padding: 0,
    '&:before': {
      display: 'none',
    },
  },
});


class Puzzle extends React.PureComponent {
  render() {

    const { classes } = this.props;

    const {
      deckFile,
      oppBoard,
      oppHand,
      situationNotes,
      solution,
      solutionNotes,
      title,
      yourBoard,
      yourHand,
    } = this.props.data;

    return (
      <>
        <Typography children={title} paragraph variant="h4" />
        <ExpansionPanel classes={{root: classes.panel}}>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="See Decklist:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{alignContent: 'stretch'}}>
            <Decklist deckFile={deckFile}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Typography>Opponent&apos;s Hand: {oppHand}</Typography>
        <Typography>Opponent&apos;s Board: {oppBoard}</Typography>
        <Typography>Your Hand: {yourHand}</Typography>
        <Typography>Your Board: {yourBoard}</Typography>
        <Typography paragraph>{situationNotes}</Typography>
        <ExpansionPanel classes={{root: classes.panel}}>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="Solution:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <Typography children={solution} paragraph />
              <Typography children={solutionNotes} paragraph />
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </>
    );
  }
}


export default withStyles(styles)(Puzzle);
