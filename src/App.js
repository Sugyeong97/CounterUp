import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

function App() {
  const [counter2, setCounter2] = useState(0);

  const increase = () => {
    setCounter2(counter2 + 1);
  };

  return (
    <div>
      <div>state:{counter2}</div>
      <button onClick={increase}>Click!</button>
    </div>
  );
}

export default App;
