// App.js
import React from 'react';
import Card from './Card.js';

const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(
      Card,
      { style: { backgroundColor: 'lightblue' } },
      React.createElement('h2', null, 'Card Title'),
      React.createElement('p', null, 'This is a card component.')
    ),
    React.createElement(
      Card,
      { style: { backgroundColor: 'lightgreen' } },
      React.createElement('h2', null, 'Another Card'),
      React.createElement('p', null, 'This is another card component.')
    )
  );
};

export default App;