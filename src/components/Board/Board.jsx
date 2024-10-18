import React, { useState } from 'react';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Handle a square click
  const handleClick = (i) => {
    // Create a copy of the squares array
    const newSquares = squares.slice();

    // If the square is already filled or there's a winner, return early
    if (newSquares[i]) {
      return;
    }

    // Switch between X and O based on the current player
    newSquares[i] = xIsNext ? 'X' : 'O';

    // Log the player who will play next
    console.log(`The next player will be using: ${xIsNext ? 'O' : 'X'}`);

    // Switch to the next player
    setXIsNext(!xIsNext);
  };

  const renderSquare = (i) => {
    return (
      <button
        className="w-16 h-16 border border-gray-400 flex items-center justify-center text-2xl"
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </button>
    );
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {/* Left Board */}
      <div className="w-1/4 flex flex-col items-center justify-center bg-gray-200">
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

      {/* Middle Line */}
      <div className="w-1 bg-black h-full"></div>

      {/* Right Board (Same as Left Board) */}
      <div className="w-1/4 flex flex-col items-center justify-center bg-gray-200">
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
    </div>
  );
};

export default Board;
