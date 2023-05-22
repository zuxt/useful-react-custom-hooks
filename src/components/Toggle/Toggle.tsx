import useToggle from "../../hooks/useToggle/useToggle";


const Toggle:React.FC = () => { 
  const [value, toggleValue] = useToggle(false);
  return (
    <div>
      <div>{value.toString()}</div>
      <button onClick={() => toggleValue(!value)}>TOGGLE</button>
      <button onClick={() => toggleValue(true)}>TRUE</button>
      <button onClick={() => toggleValue(false)}>false</button>
    </div>
  );


}

export default Toggle;