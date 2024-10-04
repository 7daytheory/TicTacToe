import React, { useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
// Initialize state for squares
const [squares, setSquares] = useState(Array(9).fill(null));
const [xIsNext, setXIsNext] = useState(true);

// Handle square click
const handleClick = (i) => {
  const newSquares = squares.slice();
  if (calculateWinner(squares) || squares[i]) {
    return;
  }
  newSquares[i] = xIsNext ? 'X' : 'O';
  setSquares(newSquares);
  setXIsNext(!xIsNext);
};

// Render a square with Square Component
const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl font-bold">{status}</div>
      <div className="flex">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="flex">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="flex">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
