import React from 'react';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import Decklist from './Decklist';

export default class Puzzle extends React.PureComponent {
    render() { 
        const {oppBoard, oppHand, situationNotes, solution, solutionNotes, yourBoard, yourHand, deckFile} = this.props.puzzleDetails;
        const {index} = this.props;
        console.log(oppBoard);
        return ( 
            <div style={{marginTop:"30px"}}>
              <Typography variant="h5">Puzzle #{this.props.index+1}</Typography>
              <ExpansionPanel style={{margin:"5px"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography > See Decklist: </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{alignContent:"stretch"}}>
                  <Decklist deckFile={deckFile}/>
                </ExpansionPanelDetails>
              </ExpansionPanel> 
              <Typography gutterBottom>Opponent's Hand: {oppHand} </Typography>
              <Typography gutterBottom>Opponent's Board: {oppBoard}</Typography>
              <Typography gutterBottom>Your Hand: {yourHand}</Typography> 
              <Typography gutterBottom>Your Board: {yourBoard}</Typography>
              <Typography gutterBottom>{situationNotes}</Typography>
              <ExpansionPanel style={{margin:"5px"}}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header">
                  <Typography > Solution: </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <List>
                    <Typography gutterBottom>{solution}</Typography>
                    <Typography gutterBottom>{solutionNotes}</Typography>
                  </List>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
            );
    }
}