import React from 'react';
import PropTypes from 'prop-types';

/**
 * A reusable UserProfile component
 * @param {object} user - The user's data
 */
const UserProfile = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserProfile;