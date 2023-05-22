import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce/useDebounce';

const Debounce: React.FC = () => {
  const [count, setCount] = useState(10);
  useDebounce(()=>alert(count),1000, [count]);

  return (
    <div>
      <div>{ count }</div>
      <button onClick={()=>setCount(cnt => cnt+1)}>CLICKME</button>

    </div>

  );

};

export default Debounce;
