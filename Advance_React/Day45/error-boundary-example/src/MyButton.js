// src/MyButton.js
import React from 'react';

const MyButton = () => {
  const handleClick = () => {
    throw new Error('Button clicked! 😱');
  };

  return <button onClick={handleClick}>Click me!</button>;
};

export default MyButton;