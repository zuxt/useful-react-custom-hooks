import { useEffect, useRef } from 'react';

export default function useEventListener<T extends Event>(
  eventType: keyof WindowEventMap,
  callback: (e: T) => void,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  element: any = window
) {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (e: T) => callbackRef.current(e);

    element.addEventListener(eventType, handler as EventListener);

    return () =>
      element.removeEventListener(eventType, handler as EventListener);
  }, [eventType, element]);
}
