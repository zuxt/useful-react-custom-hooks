import useStateValidation from "../../hooks/useStateValidation/useStateValidation";


const StateValidation: React.FC = () => { 

  const validateFnc = (name:string) => name.length > 5;
  
  const [userName, setUserName, isValid] = useStateValidation<string>(
    validateFnc,
    ''
  );

  return <div>

    <div>Valid: { isValid.toString()}</div>

    <input
      type="text"
      value={userName.toString()}
      onChange={e => {
        const val = e.target.value;
        setUserName(val)
      }}
    />

    

  </div>;


};

export default StateValidation;