import { RefObject, useEffect, useState } from "react";

export default function useOnScreen<T>(ref: RefObject<T>, rootMargin = '0') {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current === null) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    );

    observer.observe((ref.current) as Element);

    return () => {
      if (ref.current === null) return;

      observer.unobserve((ref.current) as Element);
    };
  }, [ref.current, rootMargin]);

  return isVisible;
}