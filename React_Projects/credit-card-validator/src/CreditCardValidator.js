import React, { useState } from 'react';
import './CreditCardValidator.css';

const CreditCardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [isValid, setIsValid] = useState(null);
  const [cardType, setCardType] = useState(null);

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D+/g, '');
    const formattedValue = value
      .replace(/(\d{4})/g, '$1 ')
      .trim();
    setCardNumber(formattedValue);
  };

  const detectCardType = (cardNumber) => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, '');
    if (/^4/.test(cardNumberWithoutSpaces)) {
      return 'Visa';
    } else if (/^5[1-5]/.test(cardNumberWithoutSpaces)) {
      return 'Mastercard';
    } else if (/^3[47]/.test(cardNumberWithoutSpaces)) {
      return 'American Express';
    } else if (/^6(?:011|5)/.test(cardNumberWithoutSpaces)) {
      return 'Discover';
    } else {
      return 'Unknown';
    }
  };

  const validateCardNumber = () => {
    const cardNumberWithoutSpaces = cardNumber.replace(/\s+/g, '');
    if (!/^\d+$/.test(cardNumberWithoutSpaces)) {
      setIsValid(false);
      setCardType(null);
      return;
    }

    const sum = cardNumberWithoutSpaces
      .split('')
      .reverse()
      .map((digit, index) => {
        let num = parseInt(digit);
        if (index % 2 !== 0) {
          num *= 2;
          if (num > 9) {
            num -= 9;
          }
        }
        return num;
      })
      .reduce((acc, num) => acc + num, 0);

    setIsValid(sum % 10 === 0);
    setCardType(detectCardType(cardNumber));
  };

  return (
    <div className="credit-card-validator">
      <h1>Credit Card Validator</h1>
      <input
        type="text"
        value={cardNumber}
        onChange={handleCardNumberChange}
        placeholder="Enter credit card number"
      />
      <button onClick={validateCardNumber}>Validate</button>
      {isValid !== null && (
        <p className={isValid ? 'valid' : 'invalid'}>
          {isValid ? 'Valid credit card number' : 'Invalid credit card number'}
          {cardType && ` (${cardType})`}
        </p>
      )}
    </div>
  );
};

export default CreditCardValidator;