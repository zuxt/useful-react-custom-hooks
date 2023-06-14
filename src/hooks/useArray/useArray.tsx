import { useState } from 'react';


export default function useArray<T>(defaultValue:T[]) { 
  const [array, setArray] = useState(defaultValue);


  const push = (item:T) => { 
    setArray(a => [...a, item]);
  }


  const filter = (callback:(item:T)=>boolean) => {
    setArray(a=> a.filter(callback))
  };

  const replace = (i: number, item: T) => {
    setArray(
      a => {
        a.splice(i, 1, item);
      
        return [...a];
      }
    );
  }

  const remove = (i:number) => {
    setArray(a => {
      
      a.splice(i,1);
      
      return [...a]
    })
  }

  const clear = () => { 
    setArray([]);
  }


  return { array, set: setArray, push, filter, replace, remove, clear };

}