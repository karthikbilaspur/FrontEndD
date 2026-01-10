import React from 'react';
import { Link } from 'react-router-dom';

const QuizCategory = () => {
  return (
    <div>
      <h1>Quiz Category</h1>
      <ul>
        <li>
          <Link to="/quiz/easy">Easy</Link>
        </li>
        <li>
          <Link to="/quiz/difficult">Difficult</Link>
        </li>
        <li>
          <Link to="/quiz/fill-ups">Fill-ups</Link>
        </li>
        <li>
          <Link to="/quiz/hard">Hard</Link>
        </li>
        <li>
          <Link to="/quiz/mcq">MCQ</Link>
        </li>
      </ul>
    </div>
  );
};

export default QuizCategory;