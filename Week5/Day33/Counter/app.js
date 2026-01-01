import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className="counter-container">
      <h1 className="counter-title">Counter: {count}</h1>
      <div className="button-container">
        <button className="counter-button" onClick={increment}>Increment</button>
        <button className="counter-button" onClick={decrement}>Decrement</button>
        <button className="counter-button reset-button" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;