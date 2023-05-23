import { useState } from 'react';


export default function useArray(defaultValue:any[]) { 
  const [array, setArray] = useState(defaultValue);


  const push = (item:any) => { 
    setArray(a => [...a, item]);
  }


  const filter = (callback:(item:any)=>boolean) => {
    setArray(a=> a.filter(callback))
  };

  const replace = (i: number, item: any) => {
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