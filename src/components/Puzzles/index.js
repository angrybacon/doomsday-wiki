import PropTypes from 'prop-types';
import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Puzzle from '../Puzzle';
import useStyles from './styles';


export default function Puzzles({ puzzles: source }) {

  const [ puzzles ] = useState(source);
  const classes = useStyles();

  const onFilter = () => {};

  const renderInput = rest => <TextField {...rest} fullWidth label="Filter" variant="outlined" />;

  const options = [
    {title: 'The Shawshank Redemption', year: 1994},
    {title: 'The Godfather', year: 1972},
    {title: 'The Godfather: Part II', year: 1974},
    {title: 'The Dark Knight', year: 2008},
    {title: '12 Angry Men', year: 1957},
    {title: "Schindler's List", year: 1993},
    {title: 'Pulp Fiction', year: 1994},
    {title: 'The Lord of the Rings: The Return of the King', year: 2003},
    {title: 'The Good, the Bad and the Ugly', year: 1966},
    {title: 'Fight Club', year: 1999},
    {title: 'The Lord of the Rings: The Fellowship of the Ring', year: 2001},
    {title: 'Star Wars: Episode V - The Empire Strikes Back', year: 1980},
    {title: 'Forrest Gump', year: 1994},
    {title: 'Inception', year: 2010},
  ];

  return (
    <>
      <Paper>
        <Autocomplete classes={{paper: classes.paper}}
                      getOptionLabel={it => it.title}
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
