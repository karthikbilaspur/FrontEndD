import React, { useState } from 'react';
import './styles.css';

const CoinFlipper = () => {
  const [flipResult, setFlipResult] = useState(null);
  const [headsCount, setHeadsCount] = useState(0);
  const [tailsCount, setTailsCount] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const flipCoin = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setAnimationClass('flipping');

    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    setTimeout(() => {
      setFlipResult(result);
      if (result === 'Heads') {
        setHeadsCount((prevCount) => prevCount + 1);
      } else {
        setTailsCount((prevCount) => prevCount + 1);
      }
      setAnimationClass('');
      setIsFlipping(false);
    }, 1000);
  };

  const resetStats = () => {
    setHeadsCount(0);
    setTailsCount(0);
    setFlipResult(null);
  };

  return (
    <div className="coin-flipper">
      <h1>Coin Flipper</h1>
      <div className={`coin ${animationClass}`}>
        <div className="coin-face heads">Heads</div>
        <div className="coin-face tails">Tails</div>
      </div>
      <button onClick={flipCoin} disabled={isFlipping}>
        {isFlipping ? 'Flipping...' : 'Flip Coin'}
      </button>
      <p>Result: {flipResult}</p>
      <p>Heads: {headsCount}</p>
      <p>Tails: {tailsCount}</p>
      <button className="reset-btn" onClick={resetStats}>
        Reset Stats
      </button>
    </div>
  );
};

export default CoinFlipper;