import useMediaQuery from "../../hooks/useMediaQuery/useMediaQuery";

const MediaQuery:React.FC = () => {

  const test = useMediaQuery('(min-width: 1280px) and (max-width: 1535px)');

  return (
    <div>
      MediaQuery: (min-width: 1280px) and (max-width: 1535px) {test.toString()}
    </div>
  );

};

export default MediaQuery;