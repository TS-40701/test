import React from 'react';

const CHOICE_EMOJIS = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️',
};

function GameResult({ playerChoice, computerChoice, result }) {
  if (!playerChoice) return null;

  const resultMessages = {
    win: '🎉 You Win!',
    lose: '😞 You Lose!',
    draw: '🤝 It\'s a Draw!',
  };

  return (
    <div className={`game-result result-${result}`}>
      <div className="result-choices">
        <div className="result-choice">
          <span className="result-label">You chose</span>
          <span className="result-emoji">{CHOICE_EMOJIS[playerChoice]}</span>
          <span className="result-choice-name">{playerChoice}</span>
        </div>
        <span className="vs-text">VS</span>
        <div className="result-choice">
          <span className="result-label">Computer chose</span>
          <span className="result-emoji">{CHOICE_EMOJIS[computerChoice]}</span>
          <span className="result-choice-name">{computerChoice}</span>
        </div>
      </div>
      <div className="result-message">{resultMessages[result]}</div>
    </div>
  );
}

export default GameResult;
