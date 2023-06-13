import './App.css'

import Toggle from './components/Toggle/Toggle'
import Timeout from './components/Timeout/Timeout';
import Debounce from './components/Debounce/Debounce';
import UpdateEffect from './components/UpdateEffect/UpdateEffect';
import Array from './components/Array/Array';
import Previous from './components/Previous/Previous';
import StateHistory from './components/StateHistory/StateHistory';
import Storage from './components/Storage/Storage';
import Async from './components/Async/Async';
import Fetch from './components/Fetch/Fetch';
import Translations from './components/Translations/Translations';
import EventListener from './components/EventListener/EventListener';
import OnScreen from './components/OnScreen/OnScreen';
import WindowSize from './components/WindowSize/WindowSize';
import MediaQuery from './components/MediaQuery/MediaQuery';
import StateValidation from './components/StateValidation/StateValidation';
import GetSize from './components/GetSize/GetSize';

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

      <div className="wrapper">
        <label className="label">useOnScreen custom hook example</label>
        <div className="text">OnScreen hook example</div>
        <OnScreen />
      </div>

      <div className="wrapper">
        <label className="label">useAsync custom hook example</label>
        <div className="text">async hook example</div>
        <Async />
      </div>

      <div className="wrapper">
        <label className="label">useFetch custom hook example</label>
        <div className="text">fetch hook example</div>
        <Fetch />
      </div>

      <div className="wrapper">
        <label className="label">useTranslation custom hook example</label>
        <div className="text">translation hook example</div>
        <Translations />
      </div>

      <div className="wrapper">
        <label className="label">useEvents custom hook example</label>
        <div className="text">Events hook example</div>
        <EventListener />
      </div>

      <div className="wrapper">
        <label className="label">useWindowSize custom hook example</label>
        <div className="text">WindowSize hook example</div>
        <WindowSize />
      </div>

      <div className="wrapper">
        <label className="label">useMediaQuery custom hook example</label>
        <div className="text">MediaQuery hook example</div>
        <MediaQuery />
      </div>

      <div className="wrapper">
        <label className="label">useStatevalidation custom hook example</label>
        <div className="text">Statevalidation hook example</div>
        <StateValidation />
      </div>

      <div className="wrapper">
        <label className="label">useGetSize custom hook example</label>
        <div className="text">GetSize hook example</div>
        <GetSize />
      </div>
    </>
  );
}

export default App
