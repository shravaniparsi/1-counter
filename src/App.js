import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  const resetCounter = () => {
    setCounter(0);
  };
  const decrementCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div className="counter">
      <h1 className="counter-heading">Counter</h1>
      <h2 className="counter-value">{counter}</h2>
      <div className="buttons-group">
      <button onClick={incrementCounter}>Increment</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={decrementCounter}>Decrement</button>
    </div>
      </div>
  );
};

export default App;
