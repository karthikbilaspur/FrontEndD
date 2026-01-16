import React from 'react';
import { useFlipAnimation } from '../../utils/useFlipAnimation';
import './FlipCard.css';

const FlipCard = ({ direction, children, onFlip, ...props }) => {
  const { transform, opacity, flipped, setFlipped } = useFlipAnimation(direction);

  const handleFlip = () => {
    setFlipped((state) => !state);
    if (onFlip) onFlip();
  };

  return (
    <div
      className="flip-card"
      onClick={handleFlip}
      role="button"
      tabIndex={0}
      aria-label={`Flip card ${flipped ? 'back' : 'front'}`}
      {...props}
    >
      <div className="flip-card-inner">
        <div
          className="flip-card-front"
          style={{
            opacity: opacity.to((o) => 1 - o),
            transform,
          }}
        >
          {children[0]}
        </div>
        <div
          className="flip-card-back"
          style={{
            opacity,
            transform: transform.to((t) => `${t} rotate${direction === 'horizontal' ? 'Y' : 'X'}(180deg)`),
          }}
        >
          {children[1]}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;