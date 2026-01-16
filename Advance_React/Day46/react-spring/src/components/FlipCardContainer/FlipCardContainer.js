import React from 'react';
import { useTransition, animated } from '@react-spring/web';
import FlipCard from '../FlipCard';

const FlipCardContainer = ({ cards, ...props }) => {
  const transitions = useTransition(cards, {
    from: { opacity: 0, transform: 'scale(0.5)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.5)' },
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <div>
      {transitions((style, card) => (
        <animated.div style={style}>
          <FlipCard direction={card.direction} onFlip={card.onFlip}>
            <div>{card.front}</div>
            <div>{card.back}</div>
          </FlipCard>
        </animated.div>
      ))}
    </div>
  );
};

export default FlipCardContainer;