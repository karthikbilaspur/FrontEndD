import React, { useState, useEffect } from 'react';
import Question from './Question';
import easyQuestions from './easy.json';
import mediumQuestions from './medium.json';
import hardQuestions from './hard.json';
import './QuizApp.css';

interface QuestionType {
  question: string;
  options: string[];
  answer: string;
}

const QuizApp: React.FC = () => {
  const [difficulty, setDifficulty] = useState('easy');
  const [questions, setQuestions] = useState<QuestionType[]>(easyQuestions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(30);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    if (difficulty === 'easy') setQuestions(easyQuestions);
    else if (difficulty === 'medium') setQuestions(mediumQuestions);
    else setQuestions(hardQuestions);
  }, [difficulty]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer > 0 && !quizFinished) setTimer(timer - 1);
      else if (timer === 0 && !quizFinished) handleNextQuestion();
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, quizFinished]);

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestion].answer) setScore(score + 1);
    handleNextQuestion();
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimer(30);
    } else {
      setQuizFinished(true);
      alert(`Quiz finished! Your score is ${score}/${questions.length}`);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setTimer(30);
    setQuizFinished(false);
  };

  return (
    <div className="container">
      <h1 className="header">Quiz App</h1>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="select" title="Select Difficulty">
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <p className="timer">Time left: {timer} seconds</p>
      {quizFinished ? (
        <div className="result">
          <h2>Quiz Finished!</h2>
          <p>Your score is {score}/{questions.length}</p>
          <button className="button" onClick={handleRestart}>Restart</button>
        </div>
      ) : (
        <Question
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          handleAnswer={handleAnswer}
        />
      )}
      <p className="score">Score: {score}</p>
    </div>
  );
};

export default QuizApp;