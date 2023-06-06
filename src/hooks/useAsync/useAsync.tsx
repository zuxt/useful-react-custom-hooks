import { useCallback, useEffect, useState } from 'react';

export default function useAsync<T>(
  callback: () => Promise<T>,
  dependencies: React.DependencyList
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [value, setValue] = useState<T>();

  const callbackMemoized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setValue(undefined);

    callback()
      .then(setValue)
      .catch((error) => {
        setError(new Error( error) );
      })
      .finally(() => setLoading(false));
  }, dependencies);

  useEffect(() => {
    callbackMemoized();
  }, [callbackMemoized]);

  return { loading, error, value };
}