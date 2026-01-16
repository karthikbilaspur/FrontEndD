import React, { useState } from 'react';
import FlipCardContainer from './components/FlipCardContainer';

const App = () => {
  const [cards, setCards] = useState([
    { direction: 'horizontal', front: 'FRONT 1', back: 'BACK 1', onFlip: () => console.log('Flipped 1') },
    { direction: 'vertical', front: 'FRONT 2', back: 'BACK 2', onFlip: () => console.log('Flipped 2') },
  ]);

  return (
    <div>
      <FlipCardContainer cards={cards} />
    </div>
  );
};

export default App;