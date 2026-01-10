import React, { useState } from 'react';
import './Game.css';

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const choices = ['rock', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    determineWinner(choice, computerChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult('It\'s a tie!');
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
      setResult('You win!');
      setScore((prevScore) => ({ player: prevScore.player + 1, computer: prevScore.computer }));
    } else {
      setResult('Computer wins!');
      setScore((prevScore) => ({ player: prevScore.player, computer: prevScore.computer + 1 }));
    }
  };

  const resetGame = () => {
    setPlayerChoice('');
    setComputerChoice('');
    setResult('');
    setScore({ player: 0, computer: 0 });
  };

  return (
    <div className="game">
      <h1>Rock Paper Scissors</h1>
      <div className="scoreboard">
        <p>Player: {score.player}</p>
        <p>Computer: {score.computer}</p>
      </div>
      <div className="choices">
        <button onClick={() => handlePlayerChoice('rock')}><i className="fa-solid fa-hand-back-fist"></i> Rock</button>
        <button onClick={() => handlePlayerChoice('paper')}><i className="fa-solid fa-hand"></i> Paper</button>
        <button onClick={() => handlePlayerChoice('scissors')}><i className="fa-solid fa-hand-scissors"></i> Scissors</button>
      </div>
      <p>Player choice: {playerChoice}</p>
      <p>Computer choice: {computerChoice}</p>
      <p>{result}</p>
      <button onClick={resetGame}>Reset Game</button>
    </div>
  );
};

export default Game;