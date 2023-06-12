import { useRef } from 'react';
import useOnScreen from '../../hooks/useOnScreen/useOnScreen';

const OnScreen:React.FC = () => { 
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useOnScreen(sectionRef, '-200px');

  return (
    <div>
      <div ref={sectionRef}>Test: {`ON SCREEN ${visible}`}</div>
    </div>
  );


};

export default OnScreen;