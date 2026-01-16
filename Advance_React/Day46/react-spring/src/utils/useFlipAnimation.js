import { useSpring } from '@react-spring/web';
import { useState } from 'react';

const useFlipAnimation = (direction) => {
  const [flipped, setFlipped] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotate${direction === 'horizontal' ? 'Y' : 'X'}(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return { transform, opacity, flipped, setFlipped };
};

export default useFlipAnimation;