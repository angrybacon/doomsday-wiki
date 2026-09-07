import { useEffect, useRef, useState } from 'react';

type Props = {
  query: string;
};

export const useToc = ({ query }: Props) => {
  const [id, setId] = useState<string>();
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            setId(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 },
    );

    document
      .querySelectorAll(query)
      .forEach((it) => observer.current?.observe(it));

    return () => observer.current?.disconnect();
  }, [query]);

  return { id };
};
