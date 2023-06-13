import { useState, useCallback } from 'react';

export default function useStateValidation<T>(
  validationFnc: (nextState: T) => boolean,
  initialValue: T
): [T, (nextState: T) => void, boolean] {
  const [state, setState] = useState(initialValue);
  const [isvalid, setIsValid] = useState(() => validationFnc(state));

  const onChange = useCallback(
    (nextState: T) => {
      const value =
        typeof nextState === 'function' ? nextState(state) : nextState;

      setState(value);
      setIsValid(validationFnc(value));
    },
    [validationFnc, state]
  );

  return [state, onChange, isvalid];
}