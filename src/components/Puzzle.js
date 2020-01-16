import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import List from '@material-ui/core/List';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import Decklist from './Decklist';


export default class Puzzle extends React.PureComponent {
  render() {

    const {
      deckFile,
      oppBoard,
      oppHand,
      situationNotes,
      solution,
      solutionNotes,
      yourBoard,
      yourHand,
    } = this.props.puzzleDetails;

    console.log(oppBoard);

    return (
      <div style={{marginTop: 30}}>
        <Typography variant="h5">Puzzle #{this.props.index+1}</Typography>
        <ExpansionPanel style={{margin: 5}}>
          <ExpansionPanelSummary aria-controls="panel1a-content"
                                 expandIcon={<ChevronDownIcon />}
                                 id="panel1a-header">
            <Typography children="See Decklist:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails style={{alignContent: 'stretch'}}>
            <Decklist deckFile={deckFile}/>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <Typography gutterBottom>Opponent's Hand: {oppHand}</Typography>
        <Typography gutterBottom>Opponent's Board: {oppBoard}</Typography>
        <Typography gutterBottom>Your Hand: {yourHand}</Typography>
        <Typography gutterBottom>Your Board: {yourBoard}</Typography>
        <Typography gutterBottom>{situationNotes}</Typography>
        <ExpansionPanel style={{margin: 5}}>
          <ExpansionPanelSummary aria-controls="panel1a-content"
                                 expandIcon={<ChevronDownIcon />}
                                 id="panel1a-header">
            <Typography children="Solution:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <List>
              <Typography children={solution} gutterBottom />
              <Typography children={solutionNotes} gutterBottom />
            </List>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}
