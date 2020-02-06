import c from 'classnames';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import Decklist from '../Decklist';
import useStyles from './styles';


export default function Puzzle({ barf, data }) {

  const classes = useStyles();
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
  } = data;

  return (
    <>
      <Typography children={title} paragraph variant="h4" />
      <Box className={c({[classes.barf]: barf})} my={2}>
        <ExpansionPanel classes={{root: classes.panel}} elevation={0} square>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="See Decklist:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{root: c(classes.panelDetails, classes.deck)}}>
            <div>
              <Divider />
              <Decklist deckFile={deckFile} hr={false} />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
      <Typography children={`Opponent's Hand: ${oppHand}`} />
      <Typography children={`Opponent's Board: ${oppBoard}`} />
      <Typography children={`Your Hand: ${yourHand}`} />
      <Typography children={`Your Board: ${yourBoard}`} />
      <Typography children={situationNotes} />
      <Box className={c({[classes.barf]: barf})} mt={2}>
        <ExpansionPanel classes={{root: classes.panel}} elevation={0} square>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="Solution:" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{root: classes.panelDetails}}>
            <Typography children={solution} paragraph />
            <Typography children={solutionNotes} paragraph />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
    </>
  );
}


Puzzle.propTypes = {
  barf: PropTypes.bool,
  data: PropTypes.shape({
    deckFile: PropTypes.string.isRequired,
    oppBoard: PropTypes.string.isRequired,
    oppHand: PropTypes.string.isRequired,
    situationNotes: PropTypes.string.isRequired,
    solution: PropTypes.string.isRequired,
    solutionNotes: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    yourBoard: PropTypes.string.isRequired,
    yourHand: PropTypes.string.isRequired,
  }),
};
