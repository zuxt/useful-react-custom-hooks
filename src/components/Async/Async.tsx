import React from "react";
import useAsync from "../../hooks/useAsync/useAsync";

const Async:React.FC = () => { 
  const { loading, error, value } = useAsync(() => { 
    return new Promise<string>((resolve, reject) => {
      const success = false;

      setTimeout(() => {
        success ? resolve('hi') : reject( new Error( 'some error!') );
      }, 2000);
    });
  },[]);

  return (
    <div>
      <div>LOADING: {loading.toString()}</div>
      <div>ERROR:{error?.message}</div>
      <div>VALUE:{value}</div>
    </div>
  );

}

export default Async;