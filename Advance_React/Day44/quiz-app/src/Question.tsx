import React from 'react';
import './Question.css';

interface Props {
  question: string;
  options: string[];
  handleAnswer: (answer: string) => void;
}

const Question: React.FC<Props> = ({ question, options, handleAnswer }) => {
  return (
    <div>
      <h2 className="question">{question}</h2>
      <ul className="options">
        {options.map((option, index) => (
          <li key={index}>
            <button className="button" onClick={() => handleAnswer(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;