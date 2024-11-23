import React, { useState } from "react";

const initialBoard = Array(9).fill(null);

const calculateWinner = (cells) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      return cells[a];
    }
  }

  return null;
};

const TicTacToe = () => {
  const [cells, setCells] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(cells);
  const status = winner
    ? `Winner: ${winner}`
    : cells.every((s) => s !== null)
    ? "It's a draw!"
    : `Next player: ${xIsNext ? "X" : "O"}`;

  const handleClick = (i) => {
    if (winner || cells[i]) {
      return;
    }

    const newSquares = cells.slice();
    newSquares[i] = xIsNext ? "X" : "O";

    setCells(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleRestart = () => {
    setCells(initialBoard);
    setXIsNext(true);
  };

  const renderCell = (i) => (
    <button key={i} className="board-cell" onClick={() => handleClick(i)}>
      {cells[i]}
    </button>
  );

  return (
    <div className="container">
      <div className="status">{status}</div>
      <div className="tictactoe">
        {Array(9)
          .fill()
          .map((_, index) => renderCell(index))}
      </div>
      <button className="restart-btn" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
};

export default TicTacToe;