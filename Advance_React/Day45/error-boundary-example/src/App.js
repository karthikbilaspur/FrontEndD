// src/App.js
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import MyButton from './MyButton';

function App() {
  return (
    <div>
      <ErrorBoundary>
        <MyButton />
      </ErrorBoundary>
    </div>
  );
}

export default App;