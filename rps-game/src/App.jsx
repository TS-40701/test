import { useState, useCallback } from 'react';
import ChoiceButton from './components/ChoiceButton';
import Scoreboard from './components/Scoreboard';
import GameResult from './components/GameResult';
import GameHistory from './components/GameHistory';
import './App.css';

const CHOICES = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
  return CHOICES[Math.floor(Math.random() * CHOICES.length)];
}

function determineWinner(player, computer) {
  if (player === computer) return 'draw';
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'win';
  }
  return 'lose';
}

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0, draws: 0 });
  const [history, setHistory] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleChoice = useCallback((choice) => {
    setIsAnimating(true);
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);

    setTimeout(() => {
      const compChoice = getComputerChoice();
      const gameResult = determineWinner(choice, compChoice);

      setPlayerChoice(choice);
      setComputerChoice(compChoice);
      setResult(gameResult);
      setIsAnimating(false);

      setScore((prev) => ({
        player: prev.player + (gameResult === 'win' ? 1 : 0),
        computer: prev.computer + (gameResult === 'lose' ? 1 : 0),
        draws: prev.draws + (gameResult === 'draw' ? 1 : 0),
      }));

      setHistory((prev) => [
        { playerChoice: choice, computerChoice: compChoice, result: gameResult },
        ...prev.slice(0, 9),
      ]);
    }, 600);
  }, []);

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setScore({ player: 0, computer: 0, draws: 0 });
    setHistory([]);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Rock Paper Scissors</h1>
        <p className="subtitle">Choose your weapon!</p>
      </header>

      <Scoreboard
        playerScore={score.player}
        computerScore={score.computer}
        draws={score.draws}
      />

      <div className="choices-container">
        {CHOICES.map((choice) => (
          <ChoiceButton
            key={choice}
            choice={choice}
            onClick={handleChoice}
            disabled={isAnimating}
            isSelected={playerChoice === choice}
          />
        ))}
      </div>

      {isAnimating && (
        <div className="animating">
          <div className="loading-hands">🤜 🤛</div>
          <p>Shooting...</p>
        </div>
      )}

      <GameResult
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />

      <GameHistory history={history} />

      {history.length > 0 && (
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      )}
    </div>
  );
}

export default App;
