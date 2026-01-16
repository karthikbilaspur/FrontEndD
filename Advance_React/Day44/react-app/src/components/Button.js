import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable Button component
 * @param {string} label - The text to display on the button
 * @param {string} type - The type of button (primary, secondary, danger)
 */
const Button = ({ label, type }) => {
  return (
    <button className={`btn btn-${type}`} aria-label={label}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary', 'danger']).isRequired,
};

export default Button;