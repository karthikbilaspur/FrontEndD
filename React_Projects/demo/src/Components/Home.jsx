import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
      <h1>Welcome to Our Website</h1>
      <button onClick={() => handleNavigation('/about')}>About</button>
      <button onClick={() => handleNavigation('/contact')}>Contact</button>
    </div>
  );
};

export default Home;