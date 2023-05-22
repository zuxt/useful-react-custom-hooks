import useTimeout from "../../hooks/useTimeout/useTimeout";
import { useState } from 'react';

const Timeout:React.FC = () => { 
  const [count, setCount] = useState(10);
  const { clear, reset, set } = useTimeout(()=>setCount(0),count*1000);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount((ccnt) => ccnt + 1)}>INCREMENT</button>
      <button onClick={set}>SET</button>
      <button onClick={clear}>CLEAR</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default Timeout;