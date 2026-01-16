import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable Greeting component
 * @param {string} name - The person's name
 * @param {number} age - The person's age
 */
const Greeting = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You are {age} years old.</p>
    </div>
  );
};

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
};

Greeting.defaultProps = {
  age: 25,
};

export default Greeting;