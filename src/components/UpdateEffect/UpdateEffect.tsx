import { useState } from 'react';
import useUpdateEffect from "../../hooks/useUpdateEffect/useUpdateEffect";

const UpdateEffect:React.FC = () => { 
  const [count, setCount] = useState(1);
  useUpdateEffect(()=>alert(count),[count])
  return (
    <>
      <div>{count}</div>
      <button onClick={() => setCount((cnt) => cnt + 1)}>ADD</button>
    </>
  );

}

export default UpdateEffect;