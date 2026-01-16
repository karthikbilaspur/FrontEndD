// Card.js
import React from 'react';

const Card = ({ children, style }) => {
  return React.createElement(
    'div',
    { style: { ...style, border: '1px solid #ddd', padding: 20, borderRadius: 10 } },
    children
  );
};

export default Card;