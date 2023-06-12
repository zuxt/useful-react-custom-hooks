import { ReactNode, useState } from 'react';
import useEventListener from '../../hooks/useEventListener/useEventListener';

const EventListener:React.FC = () => { 
  const [key, setKey] = useState < string | null >(null);

  useEventListener('keydown', (e:any) => {
    setKey(e.key);
  });

  return <div>Event: { key }</div>;

};

export default EventListener;