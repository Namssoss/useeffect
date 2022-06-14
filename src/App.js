import {useState} from "react"

import Content from "./Content";
import Resize from "./Resize";

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Resize />}
    </div>
  );
}

export default App;
