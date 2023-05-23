import useArray from "../../hooks/useArray/useArray";


const Array:React.FC = () => { 
  const { array, set, push, remove, filter, replace, clear } = useArray([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
  ]);

  return (
    <div>
      <div>{array.join(',')}</div>

      <button onClick={() => push(10)}>Push 10</button>
      <button onClick={() => remove(3)}>Remove from index 3</button>
      <button onClick={() => filter((n) => n > 3)}>
        Filter out less then 3
      </button>
      <button onClick={() => replace(5, 11)}>Replace on index 5 with 11</button>
      <button onClick={() => clear()}>Clear all</button>
    </div>
  );

}

export default Array;