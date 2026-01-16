// App.js
import React, { useReducer } from 'react';

// Define the reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// Initial state
const initialState = { count: 0 };

// Counter component
function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <p style={{ fontSize: '24px' }}>Count: {state.count}</p>
      <button
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px' }}
        onClick={() => dispatch({ type: 'INCREMENT' })}
      >
        +
      </button>
      <button
        style={{ padding: '10px 20px', fontSize: '18px', margin: '10px' }}
        onClick={() => dispatch({ type: 'DECREMENT' })}
      >
        -
      </button>
    </div>
  );
}

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;