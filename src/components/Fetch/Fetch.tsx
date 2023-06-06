import { useState } from 'react';
import useFetch from '../../hooks/usefetch/useFetch';

const Fetch: React.FC = () => {
  const [id, setId] = useState(1);
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {}, 
    [id]
  );

  return (
    <div>
      <div>{id}</div>
      <button onClick={() => setId(cid => cid + 1)}>up id</button>
      
      <div>LOADING: {loading.toString()}</div>
      <div>ERROR: {error?.message}</div>
      <div>VALUE: { JSON.stringify(value)}</div>
    </div>
  );

};
 
export default Fetch;