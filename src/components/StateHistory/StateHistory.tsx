import useStateHistory from "../../hooks/useStateHistory/useStateHistory";

const StateHistory:React.FC = () => { 
  const [count, setCount, { history, pointer, back, forward, go }] = useStateHistory<any>(1);

  return (
    <div>
      <div>{count}</div>
      <div>history :{history.join(' | ')}</div>
      <div>pointer : {pointer}</div>

      <button onClick={() => setCount((cc: number) => cc * 2)}>DOUBLE</button>

      <button onClick={() => setCount((cc: number) => cc + 1)}>ADD</button>

      <button onClick={back}>back</button>
      <button onClick={forward}>forward</button>
      <button onClick={() => go(2)}>goto 2</button>
    </div>
  );

}

export default StateHistory;