import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import Highlighter from 'react-highlight-words';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Collapsible from '../Collapsible';
import Deck from '../Deck';
import Listify from '../Listify';
import useStyles from './styles';

export default function Puzzle({ barf, component, data, words }) {

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

  const highlighter = words => value => (
    <Highlighter
      highlightClassName={classes.highlight}
      searchWords={words}
      textToHighlight={value}
    />
  );

  const listify = (value, highlighter) => {
    const renderer = (
      typeof highlighter === 'function' && words.length ? highlighter(words) : null
    );
    return !!value && <Listify items={value} renderer={renderer} />;
  };

  const rows = [
    {label: "Opponent's Hand", text: listify(oppHand, highlighter)},
    {label: "Opponent's Board", text: listify(oppBoard, highlighter)},
    {label: 'Your Hand', text: listify(yourHand, highlighter)},
    {label: 'Your Board', text: listify(yourBoard, highlighter)},
  ].filter(it => it.text);

  return React.createElement(component, {className: classes.root}, (
    <>
      <Typography gutterBottom variant="h4">
        <Highlighter
          highlightClassName={classes.highlight}
          searchWords={words}
          textToHighlight={title}
        />
      </Typography>
      <Box className={c({[classes.barf]: barf})} my={2}>
        <Deck collapsible path={deckFile} />
      </Box>
      {notes && (
        <Typography paragraph>
          <Highlighter
            highlightClassName={classes.highlight}
            searchWords={words}
            textToHighlight={notes}
          />
        </Typography>
      )}
      {!!rows.length && (
        <Typography container className={classes.situation} component={Grid}>
          {rows.map((it, index) => (
            <React.Fragment key={index}>
              <Grid item md={3} sm={4} xs={12}>{it.label}</Grid>
              <Grid item md={9} sm={8} xs={12}>{it.text}</Grid>
            </React.Fragment>
          ))}
        </Typography>
      )}
      <Box className={c({[classes.barf]: barf})} mt={2}>
        <Collapsible title="Solution">
          <Typography paragraph component="div">{listify(solution)}</Typography>
          <Typography>{solutionNotes}</Typography>
        </Collapsible>
      </Box>
    </>
  ));
}

Puzzle.defaultProps = {
  component: 'div',
  words: [],
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
  words: PropTypes.arrayOf(PropTypes.string),
};
