import React, { useState } from 'react';
import MainBoard from '../MainBoard/MainBoard';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  //Check for winner
  const [winner, setWinner] = useState(null);

  //Set possible winning combinations
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // first - third row
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // First to third column
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // 2 diagonals
      [2, 4, 6],
    ];

    // Check all winning combinations
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

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

    // Check if there's a winner
    const winner = calculateWinner(newSquares);
    if (winner) {
      setWinner(winner);
    }

    // Switch to the next player
    setXIsNext(!xIsNext);
  };

  // Display winner message if there's a winner
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'Player 1 (X)' : 'Player 2 (O)'}`;

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