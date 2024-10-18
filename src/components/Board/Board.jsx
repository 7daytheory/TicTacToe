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

    // Update squares state
    setSquares(newSquares);

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

  const status = `Next player: ${xIsNext ? 'Player 1 (X)' : 'Player 2 (O)'}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* Player 1 and Player 2 graphics */}
      <div className="flex justify-between w-2/4 mb-8">
        {/* Player 1 graphic */}
        <div className={`text-2xl ${xIsNext ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 1</p>
            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mt-2">
              X
            </div>
          </div>
        </div>

        {/* Player 2 graphic */}
        <div className={`text-2xl ${!xIsNext ? 'text-red-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 2</p>
            <div className="w-20 h-20 bg-red-600 text-white rounded-full flex items-center justify-center mt-2 ">
              O
            </div>
          </div>
        </div>
      </div>

      {/* Status message */}
      <div className="mb-4 text-2xl font-bold">{status}</div>

      {/* Game board */}
      <div className="flex flex-row justify-center items-center">
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
    </div>
  );
};

export default Board;
