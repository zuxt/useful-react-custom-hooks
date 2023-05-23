import { useEffect, useRef } from "react";

export default function useUpdateEffect(callback:()=>void, dependencies:any[]) { 
  const firstRender = useRef(true);

  useEffect(() => { 
    if (firstRender.current) {
      firstRender.current = false;
      return;
    } 
      return callback();
        
  },dependencies);
}