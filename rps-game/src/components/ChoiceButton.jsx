import React from 'react';

const CHOICE_EMOJIS = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️',
};

function ChoiceButton({ choice, onClick, disabled, isSelected }) {
  return (
    <button
      className={`choice-btn ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(choice)}
      disabled={disabled}
      aria-label={choice}
    >
      <span className="choice-emoji">{CHOICE_EMOJIS[choice]}</span>
      <span className="choice-label">{choice}</span>
    </button>
  );
}

export default ChoiceButton;
