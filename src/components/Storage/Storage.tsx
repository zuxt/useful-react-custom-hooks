import React from "react";
import { useLocalStorage, useSessionStorage } from "../../hooks/useStorage/useStorage";

const Storage:React.FC = () => { 
  const [name, setName, removeName] = useSessionStorage('name', 'MRKI');
  const [age, setAge, removeAge] = useLocalStorage('name', 43);


  return (
    <div>
      <div>
        {name} : {age}
      </div>

      <button onClick={() => setName('ZORAN')}> set name </button>
      <button onClick={() => setAge(45)}> set age </button>

      <button onClick={removeName}> remove name </button>
      <button onClick={removeAge}> remove age </button>
    </div>
  );

};

export default Storage;