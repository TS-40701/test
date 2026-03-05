import React from 'react';

function Scoreboard({ playerScore, computerScore, draws }) {
  return (
    <div className="scoreboard">
      <div className="score-item player-score">
        <span className="score-label">You</span>
        <span className="score-value">{playerScore}</span>
      </div>
      <div className="score-item draw-score">
        <span className="score-label">Draws</span>
        <span className="score-value">{draws}</span>
      </div>
      <div className="score-item computer-score">
        <span className="score-label">Computer</span>
        <span className="score-value">{computerScore}</span>
      </div>
    </div>
  );
}

export default Scoreboard;
