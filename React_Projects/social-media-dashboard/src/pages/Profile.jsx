import React from 'react';
import ProfileCard from '../components/ProfileCard';
import ToDoList from '../components/ToDoList';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <ProfileCard user={currentUser} />
      <ToDoList />
    </div>
  );
};

export default Profile;