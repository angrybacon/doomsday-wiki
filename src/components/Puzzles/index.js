import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import c from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Puzzle from '../Puzzle';
import useStyles from './styles';


export default function Puzzles({ puzzles: source }) {

  const [ puzzles, setPuzzles ] = useState(source);
  const classes = useStyles();

  const getOptionLabel = filter => (
    <>
      {filter.key && <span children={`${filter.key}:`} className={classes.filterLabelPrefix} />}
      <span children={filter.value || filter} />
    </>
  );

  const onFilter = (_, filters) => {
    setPuzzles(filters.reduce((accumulator, filter) => accumulator.filter(puzzle => {
      if (typeof filter === 'string') {
        const { deckFile, id, solution, solutionNotes, ...fields } = puzzle;
        return Object.values(fields).some(it => it.toLowerCase().indexOf(filter.toLowerCase()) > -1);
      }
      const { key, value } = filter;
      return puzzle[key] && puzzle[key].indexOf(value) > -1;
    }), source));
  };

  const renderInput = properties => (
    <TextField {...properties} fullWidth label="Filter" variant="outlined" />
  );

  /* eslint-disable-next-line react/prop-types */
  const renderOption = ({ value }, { inputValue }) => (
    <div>
      {parse(value, match(value, inputValue)).map(({ highlight, text }, index) => (
        <span children={text} className={c({[classes.filterHighlight]: highlight})} key={index} />
      ))}
    </div>
  );

  const options = Object.entries(source.reduce((accumulator, {
    id, oppBoard, oppHand, situationNotes, solution, solutionNotes, yourBoard, ...rest
  }) => {
    Object.entries(rest).map(([ key, value ]) => {
      accumulator[key] = accumulator[key] || [];
      if (typeof value === 'string' && accumulator[key].indexOf(value) === -1) {
        accumulator[key] = [...accumulator[key], value];
      }
      else if (Array.isArray(value)) {
        accumulator[key] = [...accumulator[key], ...value].filter(
          (it, index, array) => array.indexOf(it) === index
        );
      }
    });
    return accumulator;
  }, {})).reduce((accumulator, [ key, values ]) => (
    [...accumulator, ...values.map(value => ({key, value}))]
  ), []);

  return (
    <>
      <Paper>
        <Autocomplete classes={{groupLabel: classes.filterGroup, paper: classes.filterPaper}}
                      freeSolo
                      getOptionLabel={getOptionLabel}
                      groupBy={({ key }) => key}
                      multiple
                      onChange={onFilter}
                      options={options}
                      renderInput={renderInput}
                      renderOption={renderOption} />
      </Paper>
      {puzzles.map((it, index) => (
        <Paper key={index}>
          <Puzzle barf data={it}/>
        </Paper>
      ))}
    </>
  );
}


Puzzles.defaultProps = {
  puzzles: [],
};


Puzzles.propTypes = {
  puzzles: PropTypes.array,
};
