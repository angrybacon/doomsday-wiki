'use client';

import type { ChangeEvent } from 'react';

import { mdiDelete, mdiReload } from '@mdi/js';
import { Icon } from '@mdi/react';
import {
  Box,
  Button,
  ButtonGroup,
  Grid,
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
import { useEffect, useState } from 'react';

import { shuffle } from '@/components/SpoilsCalculator/shuffle';

type Input = {
  copies: number;
  deck: number;
  life: number;
  samples: number;
};

type Output = {
  deathes: string;
  id: number;
  input: Input;
  lifeloss: string;
};

const INITIAL_INPUT: Input = { copies: 4, deck: 53, life: 20, samples: 1000 };

export const SpoilsCalculator = () => {
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
        [key]: Math.trunc(Number(target.value)) || 0,
      }));

  const onCompute = (): void => {
    setIsDisabled(true);
    let lifeloss = 0;
    let deathes = 0;
    for (let sample = 0; sample < input.samples; sample += 1) {
      const candidates = shuffle(input.deck);
      const index = candidates.findIndex((it) => it < input.copies);
      if (index >= 0) lifeloss += index;
      if (index < 0 || index >= input.life) deathes += 1;
    }
    setOutput((previous) => [
      {
        deathes: (deathes / input.samples).toLocaleString(undefined, {
          minimumFractionDigits: 2,
          style: 'percent',
        }),
        input,
        lifeloss: (lifeloss / input.samples).toLocaleString(undefined, {
          minimumFractionDigits: 1,
          maximumFractionDigits: 1,
        }),
        id: previous.length,
      },
      ...previous,
    ]);
    setIsDisabled(false);
  };

  const onResetInput = (): void => setInput(INITIAL_INPUT);

  const onResetOutput = (): void => setOutput([]);

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            error={input.deck < 1}
            fullWidth
            helperText={input.deck > 255 && 'Not suited for above 255'}
            label="Deck size"
            onChange={onChange('deck')}
            type="number"
            value={input.deck}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            error={input.copies < 1}
            fullWidth
            helperText={input.copies > 255 && 'Not suited for above 255'}
            label="Copies left"
            onChange={onChange('copies')}
            type="number"
            value={input.copies}
          />
        </Grid>
        <Grid size={{ xs: 6, sm: 3 }}>
          <TextField
            error={input.life < 1}
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
        <TableContainer>
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
              {output.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    {row.input.copies}&nbsp;/&nbsp;{row.input.deck} with&nbsp;
                    {row.input.life}&nbsp;life ({row.input.samples}
                    &nbsp;samples)
                  </TableCell>
                  <TableCell>{row.lifeloss}</TableCell>
                  <TableCell>{row.deathes}</TableCell>
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
