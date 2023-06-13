import { useState, useEffect } from 'react';
import useEventListener from '../useEventListener/useEventListener';

export default function useMediaQuery(mediaQuery:string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQuerylist] = useState<MediaQueryList | undefined>();

  useEffect(() => {
    const list = window.matchMedia(mediaQuery);

    setMediaQuerylist(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  useEventListener('change', () => {
      // setIsMatch((e as any).matches);
    setIsMatch(window.matchMedia(mediaQuery).matches);
  }, mediaQueryList);

  return isMatch;
}