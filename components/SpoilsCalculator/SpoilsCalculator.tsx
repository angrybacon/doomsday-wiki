import { mdiDelete, mdiReload } from '@mdi/js';
import Icon from '@mdi/react';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Grid2 as Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import {
  useEffect,
  useState,
  type ChangeEvent,
  type FunctionComponent,
} from 'react';

type Input = {
  copies: number;
  deck: number;
  life: number;
  samples: number;
};

type Output = {
  average: string;
  deathes: string;
  id: number;
  input: Input;
};

const INITIAL_INPUT: Input = { copies: 4, deck: 53, life: 20, samples: 10000 };

export const SpoilsCalculator: FunctionComponent<unknown> = () => {
  const [input, setInput] = useState(INITIAL_INPUT);
  const [isDisabled, setIsDisabled] = useState(true);
  const [output, setOutput] = useState<Output[]>([]);

  useEffect(() => {
    setIsDisabled(!Object.values(input).every(Boolean));
  }, [input]);

  const onChange =
    (key: keyof Input) =>
    ({ target }: ChangeEvent<HTMLInputElement>) =>
      setInput((previous) => ({
        ...previous,
        [key]: parseInt(target.value, 10) || 0,
      }));

  /**
   * Return a randomized array of numbers corresponding to a randomized deck.
   * Implements a simple Durstenfeld shuffle.
   */
  const shuffle = (size: number): number[] => {
    const deck = [...Array(size).keys()];
    for (let left = deck.length - 1; size > 0 && left > 0; left -= 1) {
      const right = Math.floor(Math.random() * (left + 1));
      [deck[left], deck[right]] = [deck[right] as number, deck[left] as number];
    }
    return deck;
  };

  const onCompute = (): void => {
    setIsDisabled(true);
    let average = 0;
    let deathes = 0;
    for (let sample = 0; sample < input.samples; sample += 1) {
      const candidates = shuffle(input.deck);
      let candidate = 0;
      while (candidate < candidates.length) {
        if ((candidates[candidate] as number) < input.copies) {
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
    setOutput((previous) => [{ ...result, id: previous.length }, ...previous]);
    setIsDisabled(false);
  };

  const onResetInput = (): void => setInput(INITIAL_INPUT);

  const onResetOutput = (): void => setOutput([]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            fullWidth
            label="Deck size"
            onChange={onChange('deck')}
            type="number"
            value={input.deck}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            fullWidth
            label="Copies left"
            onChange={onChange('copies')}
            type="number"
            value={input.copies}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            fullWidth
            label="Life total"
            onChange={onChange('life')}
            type="number"
            value={input.life}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            fullWidth
            helperText={input.samples > 10000 && 'Not suited for above 10,000'}
            label="Samples"
            onChange={onChange('samples')}
            type="number"
            value={input.samples}
          />
        </Grid>
      </Grid>
      <ButtonGroup
        disableElevation
        size="large"
        sx={{ display: 'flex', my: 3 }}
        variant="contained"
      >
        <Button disabled={isDisabled} onClick={onCompute} sx={{ flexGrow: 1 }}>
          Calculate
        </Button>
        <Tooltip title="Reset inputs">
          <Button onClick={onResetInput}>
            <Icon path={mdiReload} size={1} />
          </Button>
        </Tooltip>
        <Tooltip title="Clear results">
          <Button onClick={onResetOutput}>
            <Icon path={mdiDelete} size={1} />
          </Button>
        </Tooltip>
      </ButtonGroup>
      {output.length ? (
        <TableContainer sx={({ mixins }) => mixins.barf}>
          <Divider />
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Input</TableCell>
                <TableCell>Average Life Loss</TableCell>
                <TableCell>Death Likelihood</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {output.map(({ average, deathes, id, input }) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
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
