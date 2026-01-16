import React, { useState } from 'react';

interface Props {
  // Add props here if needed
}

interface State {
  count: number;
}

const App: React.FC<Props> = () => {
  const [count, setCount] = useState<State['count']>(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
};

export default App;