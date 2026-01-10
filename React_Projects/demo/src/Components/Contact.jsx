import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>You can contact us at example@example.com.</p>
      <button onClick={handleGoBack}>Go Back Home</button>
    </div>
  );
};

export default Contact;