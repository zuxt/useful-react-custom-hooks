import { useState, useEffect, RefObject } from 'react';

export default function useGetSize<T>(ref: RefObject<T>) {
  const [size, setSize] = useState({});

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new ResizeObserver(([entry]) =>
      setSize(entry.contentRect)
    );
    observer.observe((ref.current)as Element);

    return () => observer.disconnect();
  }, []);

  return size;
}