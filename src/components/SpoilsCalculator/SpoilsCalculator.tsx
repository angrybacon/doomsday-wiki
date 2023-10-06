import { ChangeEvent, FunctionComponent, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';

interface Input {
  copies?: number;
  deck?: number;
  life?: number;
  samples?: number;
}

interface Result {
  average: string;
  deathes: string;
  id: number;
  input: Input;
}

const INITIAL_INPUT: Input = { copies: 4, deck: 53, life: 20, samples: 10000 };

export const SpoilsCalculator: FunctionComponent<unknown> = () => {
  const [input, setInput] = useState(INITIAL_INPUT);
  const [isDisabled, setIsDisabled] = useState(true);
  const [results, setResults] = useState<Result[]>([]);

  useEffect(() => {
    setIsDisabled(!Object.values(input).every(Boolean));
  }, [input]);

  const onChange =
    (key: keyof Input) =>
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setInput((previous) => ({
        ...previous,
        [key]: parseInt(target.value, 10) || undefined,
      }));

  /**
   * Return a randomized array of numbers corresponding to a randomized deck.
   * Implements a simple Durstenfeld shuffle.
   */
  const shuffle = (size: number): number[] => {
    const deck = [...Array(size).keys()];
    for (let left = deck.length - 1; left > 0; left -= 1) {
      const right = Math.floor(Math.random() * (left + 1));
      [deck[left], deck[right]] = [deck[right] as number, deck[left] as number];
    }
    return deck;
  };

  const onCompute = (): void => {
    if (input.copies && input.deck && input.life && input.samples) {
      setIsDisabled(true);
      let average = 0;
      let deathes = 0;
      for (let sample = 0; sample < input.samples; sample += 1) {
        const deck = shuffle(input.deck);
        let candidate = 0;
        while (candidate < input.deck) {
          if ((deck[candidate] as number) < input.copies) {
            average += candidate;
            break;
          }
          candidate += 1;
        }
        if (candidate >= input.life) {
          deathes += 1;
        }
      }
      const result = {
        average: (average / input.samples).toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
        deathes: (deathes / input.samples).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          style: 'percent',
        }),
        input,
      };
      setResults((previous) => [
        { ...result, id: previous.length },
        ...previous,
      ]);
      setIsDisabled(false);
    }
  };

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid xs={6} sm={3}>
          <TextField
            fullWidth
            label="Deck size"
            onChange={onChange('deck')}
            type="number"
            value={input.deck}
          />
        </Grid>
        <Grid xs={6} sm={3}>
          <TextField
            fullWidth
            label="Copies left"
            onChange={onChange('copies')}
            type="number"
            value={input.copies}
          />
        </Grid>
        <Grid xs={6} sm={3}>
          <TextField
            fullWidth
            label="Life total"
            onChange={onChange('life')}
            type="number"
            value={input.life}
          />
        </Grid>
        <Grid xs={6} sm={3}>
          <TextField
            fullWidth
            label="Samples"
            onChange={onChange('samples')}
            type="number"
            value={input.samples}
          />
        </Grid>
      </Grid>
      <Button
        disableElevation
        disabled={isDisabled}
        fullWidth
        onClick={onCompute}
        sx={{ my: 3 }}
        variant="contained"
      >
        Calculate
      </Button>
      {results.length ? (
        <TableContainer sx={({ mixins }) => mixins.barf}>
          <Divider />
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Input</TableCell>
                <TableCell>Average Life Loss</TableCell>
                <TableCell>Death Likelihood</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {results.map(({ average, deathes, id, input }) => (
                <TableRow key={id}>
                  <TableCell>
                    {input.copies} out of {input.deck} with {input.life} life
                  </TableCell>
                  <TableCell>{average}</TableCell>
                  <TableCell>{deathes}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
          Input your board state and compute to see the success rate.
        </Typography>
      )}
    </Box>
  );
};
