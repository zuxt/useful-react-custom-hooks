import {  useRef } from 'react';
import useGetSize from '../../hooks/useGetSize/useGetSize';

const GetSize:React.FC = () => { 
  const ref = useRef<HTMLTextAreaElement>(null);
  const size = useGetSize<HTMLTextAreaElement>(ref);


  return <>

    <div>{ JSON.stringify(size)}</div>
  
    <textarea ref={ref} ></textarea>
  
  </>;


};

export default GetSize;
