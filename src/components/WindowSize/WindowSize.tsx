import useWindowSize from "../../hooks/useWindowSize/useWindowSize";

const WindowSize:React.FC = () => { 
  const { width, height } = useWindowSize();

  return <div>
    {width} X { height}
  </div>;

};

export default WindowSize;