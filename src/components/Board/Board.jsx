import React, { useState } from 'react';
import Square from '../Square/Square';

const Board = () => {
  // Board squares state
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Track whose turn it is
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    // Create a copy of the squares array to avoid mutating the original
    const newSquares = squares.slice();

    // Check if winner or sqaure is filled
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Update square
    newSquares[i] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  // Render square
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };

  const status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mb-4 text-2xl font-bold">{status}</div>

      {/* Render the 3 rows of squares */}
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
  