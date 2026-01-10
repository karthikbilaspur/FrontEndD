import React, { useState, useEffect } from 'react';

const UserProfile = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const userData = {
        username: 'user1',
        email: 'user1@example.com',
        scoreHistory: [
          { quizName: 'Quiz 1', score: 100 },
          { quizName: 'Quiz 2', score: 90 },
        ],
      };
      setUser(userData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <h2>Score History</h2>
      <ul>
        {user.scoreHistory.map((entry, index) => (
          <li key={index}>
            {entry.quizName}: {entry.score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfile;