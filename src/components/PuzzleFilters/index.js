import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import c from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import useStyles from './styles';


export default function PuzzleFilters({ onFilter, puzzles }) {

  const classes = useStyles();

  const getOptionLabel = filter => (
    <>
      {filter.key && <span children={`${filter.key}:`} className={classes.labelPrefix} />}
      <span children={filter.value || filter} />
    </>
  );

  const onChange = (_, filters) => {
    onFilter(filters.reduce((accumulator, filter) => accumulator.filter(puzzle => {
      if (typeof filter === 'string') {
        const { deckFile, id, solution, solutionNotes, ...fields } = puzzle;
        return Object.values(fields).some(field => {
          if (typeof field === 'string') {
            return field.indexOf(filter.toLowerCase()) > -1;
          }
          else if (Array.isArray(field)) {
            return field.some(it => it.toLowerCase().includes(filter.toLowerCase()));
          }
          return false;
        });
      }
      const { key, value } = filter;
      return puzzle[key] && puzzle[key].indexOf(value) > -1;
    }), puzzles));
  };

  const renderInput = properties => (
    <TextField {...properties} fullWidth label="Filter" variant="outlined" />
  );

  /* eslint-disable-next-line react/prop-types */
  const renderOption = ({ value }, { inputValue }) => (
    <div>
      {parse(value, match(value, inputValue)).map(({ highlight, text }, index) => (
        <span children={text} className={c({[classes.highlight]: highlight})} key={index} />
      ))}
    </div>
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
            (it, index, array) => array.indexOf(it) === index
          );
        }
      });
      return accumulator;
    }, {})
  ).reduce((accumulator, [ key, values ]) => (
    [...accumulator, ...values.map(value => ({key, value}))]
  ), []);

  return (
    <Autocomplete classes={{groupLabel: classes.group, paper: classes.paper}}
                  freeSolo
                  getOptionLabel={getOptionLabel}
                  groupBy={({ key }) => key}
                  multiple
                  onChange={onChange}
                  options={options}
                  renderInput={renderInput}
                  renderOption={renderOption} />
  );
}


PuzzleFilters.defaultProps = {
  puzzles: [],
};


PuzzleFilters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  puzzles: PropTypes.array,
};
