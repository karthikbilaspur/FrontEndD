import React, { useState } from 'react';
import Die from './Die';

const RollDice = () => {
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [shake, setShake] = useState(false);

  const rollDice = () => {
    setShake(true);
    setDie1(Math.floor(Math.random() * 6) + 1);
    setDie2(Math.floor(Math.random() * 6) + 1);
    setTimeout(() => setShake(false), 500);
  };

  const resetDice = () => {
    setDie1(1);
    setDie2(1);
  };

  const total = die1 + die2;

  return (
    <div className="roll-dice">
      <Die num={die1} shake={shake} />
      <Die num={die2} shake={shake} />
      <button onClick={rollDice}>Roll Dice</button>
      <button onClick={resetDice}>Reset</button>
      <p>Total: {total}</p>
    </div>
  );
};

export default RollDice;