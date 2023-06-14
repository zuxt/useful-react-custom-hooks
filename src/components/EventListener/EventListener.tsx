import { useState } from 'react';
import useEventListener from '../../hooks/useEventListener/useEventListener';

const EventListener:React.FC = () => { 
  const [key, setKey] = useState < string | null >(null);

  useEventListener<KeyboardEvent>('keydown', (e) => {
    setKey(e.key);
  });

  return <div>Event: { key }</div>;

};

export default EventListener;