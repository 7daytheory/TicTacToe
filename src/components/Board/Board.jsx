import React, { useState } from 'react';
import MainBoard from '../MainBoard/MainBoard';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    // Create a copy of the squares array - to not manipulate or cause an error in the main one
    const newSquares = squares.slice();

    // If the square is already filled, return early
    if (newSquares[i]) {
      return;
    }

    // Switch between X and O based on the current player
    newSquares[i] = xIsNext ? 'X' : 'O';

    // Update squares state
    setSquares(newSquares);

    // Switch to the next player
    setXIsNext(!xIsNext);
  };

  const status = `Next player: ${xIsNext ? 'Player 1 (X)' : 'Player 2 (O)'}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-8">
      <div className="flex justify-between w-full max-w-[800px] mb-8">
        <div className={`text-2xl ${xIsNext ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 1</p>
            <div className={`w-20 h-20 text-white rounded-full flex items-center justify-center mt-2 ${xIsNext ? 'bg-blue-600 font-bold' : 'bg-gray-400'}`}>
              X
            </div>
          </div>
        </div>

        <div className={`text-2xl ${!xIsNext ? 'text-red-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 2</p>
            <div className={`w-20 h-20 text-white rounded-full flex items-center justify-center mt-2 ${!xIsNext ? 'bg-red-600 font-bold' : 'bg-gray-400'}`}>
              O
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4 text-2xl font-bold">{status}</div>

      <div className="flex justify-center w-full max-w-[800px]">
        <MainBoard squares={squares} handleClick={handleClick} />

        {/* Separate boards with a line */}
        <div className="w-1 bg-black h-full"></div>

        <MainBoard squares={squares} handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Board;