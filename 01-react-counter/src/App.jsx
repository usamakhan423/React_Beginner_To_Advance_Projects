import { useState } from "react";
// import Card from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // OnAddValue function
  const addValue = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };

  // OnRemoveValue function
  const removeValue = () => {
    if (count > 0) setCount(count - 1);
  };

  // Reset Counter
  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter: {count}</h1>
      <div>
        <button onClick={addValue}>increase</button>
        <button onClick={removeValue}>descrease</button>
        <button onClick={resetCounter}>reset</button>
      </div>

      {/* <Card /> */}
    </>
  );
}

export default App;
