import { useEffect, useState } from 'react';

export const useDebounce = <T>(input: T, delay: number): T => {
  const [output, setOutput] = useState<T>(input);

  useEffect(() => {
    const timer = setTimeout(() => setOutput(input), delay);
    return () => clearTimeout(timer);
  }, [input, delay]);

  return output;
};
