'use client';

import { Box, TextField, Typography } from '@mui/material';
import { useState } from 'react';

import { phyrexian } from '@/theme/fonts/fonts';

// NOTE Flavor text from "Dark Ritual" in "Urza's Saga"
const DEFAULT_INPUT = `From void evolved Phyrexia.
Great Yawgmoth, Father of Machines, saw its perfection.
Thus the Grand Evolution began.`;

export const PhyrexianRemapper = () => {
  const [input, setInput] = useState(DEFAULT_INPUT);

  const output = input
    .trim()
    .split(/[.\n]+/)
    .reduce<{ id: number; text: string }[]>((accumulator, column, id) => {
      const value = column.trim();
      if (!value.length) return accumulator;
      return [...accumulator, { id, text: value.replace(/ +/g, ',') }];
    }, []);

  return (
    <>
      <TextField
        fullWidth
        label="Text"
        multiline
        onChange={({ target }) => setInput(target.value)}
        rows={input.split('\n').length}
        value={input}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          justifyContent: 'flex-end',
          textOrientation: 'upright',
        }}
      >
        {output.length ? (
          output.map(
            ({ id, text }) =>
              text.length > 0 && (
                <Box
                  className={phyrexian.className}
                  key={id}
                  sx={{ writingMode: 'vertical-lr' }}
                >
                  |{text}.
                </Box>
              ),
          )
        ) : (
          <Typography sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
            Type something to see the corresponding Phyrexian scripture.
          </Typography>
        )}
      </Box>
    </>
  );
};
