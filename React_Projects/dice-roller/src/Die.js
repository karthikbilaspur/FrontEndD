import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons';

const Die = ({ num, shake }) => {
  const diceIcons = [faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix];
  return (
    <div className={`die ${shake ? 'shake' : ''}`}>
      <FontAwesomeIcon icon={diceIcons[num - 1]} size="4x" />
    </div>
  );
};

export default Die;