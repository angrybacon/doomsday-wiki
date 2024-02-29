import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FunctionComponent,
} from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import { InputBase, Typography } from '@mui/material';
import { useDebounce } from '@/hooks/useDebounce';

export const Search: FunctionComponent = () => {
  const root = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState('');
  const query = useDebounce(input, 200);

  useEffect(() => {}, [query]);

  useHotkeys(
    '/',
    (event) => {
      event.preventDefault(); // NOTE Prevents typing the `/`
      root.current?.focus();
      root.current?.select();
    },
    [root.current],
  );

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  return (
    <InputBase
      fullWidth
      inputProps={{ 'aria-label': 'search', ref: root }}
      onChange={onChange}
      placeholder="Search"
      startAdornment={
        <Typography
          sx={{
            backgroundColor: 'action.focus',
            border: 1,
            borderColor: 'divider',
            borderRadius: '4px',
            color: 'text.secondary',
            fontFamily: 'monospace',
            mr: 1,
            px: 0.5,
          }}
          variant="caption"
        >
          /
        </Typography>
      }
      value={input}
    />
  );
};
