import React from 'react';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import c from 'classnames';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';

export default function PuzzleFilters({ onFilter, puzzles }) {

  const classes = useStyles();

  const getOptionLabel = filter => {
    const prefix = filter.key ? `${filter.key.toLowerCase()}: ` : '';
    return `${prefix}${filter.value || filter}`;
  };

  const onChange = (_, filters) => {
    const items = filters.reduce((accumulator, filter) => (
      accumulator.filter(puzzle => {
        if (typeof filter === 'string') {
          const { deckFile, id, solution, solutionNotes, ...fields } = puzzle;
          return should(filter, Object.values(fields));
        }
        const { key, value } = filter;
        return puzzle[key] && puzzle[key].indexOf(value) > -1;
      })
    ), puzzles);
    const words = filters.reduce((accumulator, filter) => (
      [...accumulator, (typeof filter === 'string' ? filter : filter.value).toLowerCase()]
    ), []).filter(it => it);
    onFilter(items)(words);
  };

  const renderInput = properties => (
    <TextField {...properties} fullWidth label="Filter" variant="outlined" />
  );

  /* eslint-disable-next-line react/prop-types */
  const renderOption = ({ value }, { inputValue }) => (
    <div>
      {parse(value, match(value, inputValue)).map(({ highlight, text }, index) => (
        <span key={index} className={c({[classes.highlight]: highlight})}>{text}</span>
      ))}
    </div>
  );

  const should = (input, fields) => (
    fields.flat().join(' ').toLowerCase().indexOf(input.toLowerCase()) > -1
  );

  const options = Object.entries(
    puzzles.reduce((accumulator, { id, notes, solution, solutionNotes, title, ...fields }) => {
      Object.entries(fields).map(([ key, value ]) => {
        accumulator[key] = accumulator[key] || [];
        if (typeof value === 'string' && accumulator[key].indexOf(value) === -1) {
          accumulator[key] = [...accumulator[key], value];
        }
        else if (Array.isArray(value)) {
          accumulator[key] = [...accumulator[key], ...value].filter(
            (it, index, array) => array.indexOf(it) === index,
          );
        }
      });
      return accumulator;
    }, {}),
  ).reduce((accumulator, [ key, values ]) => (
    [...accumulator, ...values.map(value => ({key, value}))]
  ), []);

  return (
    <Autocomplete
      freeSolo
      multiple
      classes={{groupLabel: classes.group, paper: classes.paper}}
      getOptionLabel={getOptionLabel}
      groupBy={({ key }) => key}
      onChange={onChange}
      options={options}
      renderInput={renderInput}
      renderOption={renderOption}
    />
  );
}

PuzzleFilters.defaultProps = {
  puzzles: [],
};

PuzzleFilters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  puzzles: PropTypes.array,
};
