import { useEffect, useState } from 'react';

type UseScroll = () => number;

export const useScroll: UseScroll = () => {
  const [scroll, setScroll] = useState<number>(0);

  const onScroll = () => {
    const { documentElement } = document;
    if (documentElement) {
      const { clientHeight, scrollHeight, scrollTop } = documentElement;
      let value = scrollTop / (scrollHeight - clientHeight);
      value = Math.ceil((value * 100) / 5) * 5;
      setScroll(Math.min(value, 100));
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll, { passive: true });
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return scroll;
};
