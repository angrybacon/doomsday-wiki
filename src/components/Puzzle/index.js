import c from 'classnames';
import ChevronDownIcon from 'mdi-react/ChevronDownIcon';
import PropTypes from 'prop-types';
import React from 'react';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Decklist from '../Decklist';
import useStyles from './styles';


export default function Puzzle({ barf, component, data }) {

  const classes = useStyles();
  const {
    deckFile,
    notes,
    oppBoard,
    oppHand,
    solution,
    solutionNotes,
    title,
    yourBoard,
    yourHand,
  } = data;

  const prettify = value => (
    <Typography children={Array.isArray(value) ? value.join(', ') : value || '-'}
                color={value ? 'inherit' : 'textSecondary'} />
  );

  return React.createElement(component, null, (
    <>
      <Typography children={title} component="h4" paragraph variant="h4" />
      <Box className={c({[classes.barf]: barf})} my={2}>
        <ExpansionPanel classes={{root: classes.panel}} elevation={0} square>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="See Decklist" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{root: c(classes.panelDetails, classes.deck)}}>
            <div>
              <Divider />
              <Decklist deckFile={deckFile} hr={false} />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Box>
      <Typography container className={classes.situation} component={Grid} gutterBottom>
        <Grid item xs={12} sm={4} md={3} children="Opponent's Hand" />
        <Grid item xs={12} sm={8} md={9} children={prettify(oppHand)} />
        <Grid item xs={12} sm={4} md={3} children="Opponent's Board" />
        <Grid item xs={12} sm={8} md={9} children={prettify(oppBoard)} />
        <Grid item xs={12} sm={4} md={3} children="Your Hand" />
        <Grid item xs={12} sm={8} md={9} children={prettify(yourHand)} />
        <Grid item xs={12} sm={4} md={3} children="Your Board" />
        <Grid item xs={12} sm={8} md={9} children={prettify(yourBoard)} />
      </Typography>
      <Typography children={notes} paragraph />
      <div className={c({[classes.barf]: barf})}>
        <ExpansionPanel classes={{root: classes.panel}} elevation={0} square>
          <ExpansionPanelSummary expandIcon={<ChevronDownIcon />}>
            <Typography children="Solution" />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails classes={{root: classes.panelDetails}}>
            <Typography children={prettify(solution)} component="div" paragraph />
            <Typography children={solutionNotes} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    </>
  ));
}


Puzzle.defaultProps = {
  component: 'div',
};


Puzzle.propTypes = {
  barf: PropTypes.bool,
  component: PropTypes.elementType,
  data: PropTypes.shape({
    authors: PropTypes.array,
    deckFile: PropTypes.string.isRequired,
    notes: PropTypes.string.isRequired,
    oppBoard: PropTypes.array,
    oppHand: PropTypes.array,
    solution: PropTypes.array.isRequired,
    solutionNotes: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    yourBoard: PropTypes.array,
    yourHand: PropTypes.array,
  }),
};
