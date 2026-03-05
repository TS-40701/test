import React from 'react';

function GameHistory({ history }) {
  if (history.length === 0) return null;

  return (
    <div className="game-history">
      <h3>Recent Rounds</h3>
      <div className="history-list">
        {history.map((round, index) => (
          <div key={index} className={`history-item history-${round.result}`}>
            <span className="history-round">#{history.length - index}</span>
            <span className="history-detail">
              {round.playerChoice} vs {round.computerChoice}
            </span>
            <span className={`history-result`}>
              {round.result === 'win' ? 'W' : round.result === 'lose' ? 'L' : 'D'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameHistory;
