import { useEffect, useState } from 'react';

type UseScroll = () => number;

export const useScroll: UseScroll = () => {
  const [scroll, setScroll] = useState<number>(0);

  const onScroll = () => {
    const { documentElement } = document;
    if (documentElement) {
      const { clientHeight, scrollHeight, scrollTop } = documentElement;
      const value = scrollTop / (scrollHeight - clientHeight);
      setScroll(Math.min(value, 1));
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return scroll;
};
