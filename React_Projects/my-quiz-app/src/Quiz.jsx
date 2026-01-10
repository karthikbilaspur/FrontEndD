import React, { useState, useEffect, useCallback } from 'react';
import easyQuestions from './easy.json';
import difficultQuestions from './difficult.json';
import fillUpQuestions from './fill-ups.json';
import hardQuestions from './hard.json';
import mcqQuestions from './mcq.json';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizType, setQuizType] = useState('easy');
  const [difficulty, setDifficulty] = useState('medium');
  const [timer, setTimer] = useState(30);
  const [showHint, setShowHint] = useState(false);
  const [hint, setHint] = useState('');
  const [showExplanation, setShowExplanation] = useState(false);
  const [explanation, setExplanation] = useState('');
  const [quizCompleted, setQuizCompleted] = useState(false);

  const fetchQuestions = useCallback(() => {
    let questions = [];
    switch (quizType) {
      case 'easy':
        questions = easyQuestions;
        break;
      case 'difficult':
        questions = difficultQuestions;
        break;
      case 'fill-ups':
        questions = fillUpQuestions;
        break;
      case 'hard':
        questions = hardQuestions;
        break;
      case 'mcq':
        questions = mcqQuestions;
        break;
      default:
        questions = [];
    }
    questions = questions.filter((question) => question.difficulty === difficulty);
    questions = questions.sort(() => Math.random() - 0.5);
    setQuestions(questions);
  }, [quizType, difficulty]);

  useEffect(() => {
    fetchQuestions();
  }, [fetchQuestions]);

  const handleAnswer = (answer) => {
    if (!answer.trim()) return;
    const currentQuestionData = questions[currentQuestion];
    if (answer === currentQuestionData.answer) {
      setScore(score + currentQuestionData.marks);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleHint = () => {
    setShowHint(true);
    setHint('This is a hint');
  };

  const handleExplanation = () => {
    setShowExplanation(true);
    setExplanation('This is an explanation');
  };

  return (
    <div>
      <h1>Quiz</h1>
      <select value={quizType} onChange={(e) => setQuizType(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="difficult">Difficult</option>
        <option value="fill-ups">Fill-ups</option>
        <option value="hard">Hard</option>
        <option value="mcq">MCQ</option>
      </select>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      {quizCompleted ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your score is {score}</p>
        </div>
      ) : (
        <div>
          <p>Time remaining: {timer} seconds</p>
          <p>{questions[currentQuestion].question}</p>
          {quizType === 'mcq' ? (
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index}>
                  <button onClick={() => handleAnswer(option)}>{option}</button>
                </li>
              ))}
            </ul>
          ) : (
            <input type="text" onChange={(e) => handleAnswer(e.target.value)} />
          )}
          <button onClick={handleHint}>Hint</button>
          {showHint && <p>{hint}</p>}
          <button onClick={handleExplanation}>Explanation</button>
          {showExplanation && <p>{explanation}</p>}
          <p>Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Quiz;