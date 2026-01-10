import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h1>About Us</h1>
      <p>This is a sample about page.</p>
      <button onClick={handleGoBack}>Go Back Home</button>
    </div>
  );
};

export default About;