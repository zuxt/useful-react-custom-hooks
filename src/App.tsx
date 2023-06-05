import './App.css'

import Toggle from './components/Toggle/Toggle'
import Timeout from './components/Timeout/Timeout';
import Debounce from './components/Debounce/Debounce';
import UpdateEffect from './components/UpdateEffect/UpdateEffect';
import Array from './components/Array/Array';
import Previous from './components/Previous/Previous';
import StateHistory from './components/StateHistory/StateHistory';
import Storage from './components/Storage/Storage';

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

      <div className="wrapper">
        <label className="label">useUpdateEffect custom hook example</label>
        <div className="text">
          Hook that triggers callback on each update BUT first
        </div>
        <UpdateEffect />
      </div>

      <div className="wrapper">
        <label className="label">useArray custom hook example</label>
        <div className="text">Collection of most used Array functions</div>
        <Array />
      </div>

      <div className="wrapper">
        <label className="label">usePrevious custom hook example</label>
        <div className="text">Store previous value</div>
        <Previous />
      </div>

      <div className="wrapper">
        <label className="label">useStateHistory custom hook example</label>
        <div className="text">Store values history</div>
        <StateHistory />
      </div>

      <div className="wrapper">
        <label className="label">useStorage custom hook example</label>
        <div className="text">Store values localstorage, sessionstorage</div>
        <Storage />
      </div>
    </>
  );
}

export default App
