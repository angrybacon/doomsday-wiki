import {
  useEffect,
  useState,
  type ChangeEvent,
  type FunctionComponent,
} from 'react';
import { InputBase } from '@mui/material';
import { useDebounce } from '@/hooks/useDebounce';

export const Search: FunctionComponent = () => {
  const [input, setInput] = useState('');
  const query = useDebounce(input, 200);

  useEffect(() => {}, [query]);

  const onChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInput(target.value);
  };

  return (
    <InputBase
      fullWidth
      inputProps={{ 'aria-label': 'search' }}
      onChange={onChange}
      placeholder="Search"
      value={input}
    />
  );
};
