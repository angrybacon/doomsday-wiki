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

  const onFilter = (_, filters) => {
    setPuzzles(filters.reduce((accumulator, { key, value }) => {
      return accumulator.filter(puzzle => puzzle[key] && puzzle[key].indexOf(value) > -1);
    }, source));
  };

  const renderInput = rest => <TextField {...rest} fullWidth label="Filter" variant="outlined" />;

  const options = Object.entries(source.reduce((accumulator, {
    id, oppBoard, oppHand, situationNotes, solution, solutionNotes, yourBoard, yourHand, ...rest
  }) => {
    Object.entries(rest).map(([ key, value ]) => {
      accumulator[key] = accumulator[key] || [];
      if (accumulator[key].indexOf(value) === -1) {
        accumulator[key] = [...accumulator[key], value];
      }
    });
    return accumulator;
  }, {})).reduce((accumulator, [ key, values ]) => (
    [...accumulator, ...values.map(value => ({key, value}))]
  ), []);

  return (
    <>
      <Paper>
        <Autocomplete classes={{paper: classes.paper}}
                      getOptionLabel={({ value }) => value}
                      groupBy={({ key }) => key}
                      multiple
                      onChange={onFilter}
                      options={options}
                      renderInput={renderInput} />
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
