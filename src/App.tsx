import './App.css'

import Toggle from './components/Toggle/Toggle'
import Timeout from './components/Timeout/Timeout';
import Debounce from './components/Debounce/Debounce';

const App: React.FC= ()=>{
  return (
    <>
      <div className="wrapper">
        <label className="label">Toggle custom hook example</label>
        <div className="text">Hook for easy toggle</div>
        <Toggle />
      </div>

      <div className="wrapper">
        <label className="label">setTimeout custom hook example</label>
        <div className="text">Hook for setting timeouts</div>
        <Timeout />
      </div>

      <div className="wrapper">
        <label className="label">setDebounce custom hook example</label>
        <div className="text">
          Hook that uses setTimeout to trigger callback after set timeout
        </div>

        <Debounce />
      </div>
    </>
  );
}

export default App
