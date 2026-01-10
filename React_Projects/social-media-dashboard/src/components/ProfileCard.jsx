import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-bold">{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};

export default ProfileCard;