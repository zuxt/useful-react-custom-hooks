import React, { useState } from "react";
import usePrevious from "../../hooks/usePrevious/usePrevious";

const Previous:React.FC = () => { 
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Mrki');

  const previousContent = usePrevious(count);

  return (
    <>
      <div>
        <div>
          {count} - {previousContent}
        </div>
        <div>{name}</div>
        <button onClick={() => setCount((cnt) => cnt + 1)}>ADD</button>
        <button onClick={() => setName('Zoran')}>SWITCH</button>
      </div>
    </>
  );


};

export default Previous;