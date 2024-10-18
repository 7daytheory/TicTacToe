// Board.js
import React, { useState } from 'react';
import MainBoard from '../MainBoard/MainBoard';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Define winning combinations (3 rows, 3 columns, 2 diagonals)
  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2], // First row
      [3, 4, 5], // Second row
      [6, 7, 8], // Third row
      [0, 3, 6], // First column
      [1, 4, 7], // Second column
      [2, 5, 8], // Third column
      [0, 4, 8], // Diagonal 1
      [2, 4, 6], // Diagonal 2
    ];

    // Check all winning combinations
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a]; // Return X or O if there is a winner
      }
    }
    return null;
  };

  // Handle a square click
  const handleClick = (i) => {
    // If there's already a winner, return early to prevent further moves
    if (squares[i] || winner) {
      return;
    }

    // Create a copy of the squares array
    const newSquares = squares.slice();

    // Switch between X and O based on the current player
    newSquares[i] = xIsNext ? 'X' : 'O';

    // Update squares state
    setSquares(newSquares);

    // Check if there's a winner
    const calculatedWinner = calculateWinner(newSquares); // Rename this variable
    if (calculatedWinner) {
      setWinner(calculatedWinner);
    }

    // Switch to the next player if there's no winner yet
    setXIsNext(!xIsNext);
  };

  // Display winner message if there's a winner
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'Player 1 (X)' : 'Player 2 (O)'}`;

  return (
    <div className="flex flex-col items-center justify-center h-screen mt-8">
      {/* Player 1 and Player 2 graphics */}
      <div className="flex justify-between w-full max-w-[800px] mb-8">
        {/* Player 1 graphic */}
        <div className={`text-2xl ${xIsNext ? 'text-blue-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 1</p>
            <div className={`w-20 h-20 text-white rounded-full flex items-center justify-center mt-2 ${xIsNext ? 'bg-blue-600 font-bold' : 'bg-gray-400'}`}>
              X
            </div>
          </div>
        </div>

        {/* Player 2 graphic */}
        <div className={`text-2xl ${!xIsNext ? 'text-red-600 font-bold' : 'text-gray-400'}`}>
          <div className="flex flex-col items-center mt-[85px]">
            <p>Player 2</p>
            <div className={`w-20 h-20 text-white rounded-full flex items-center justify-center mt-2 ${!xIsNext ? 'bg-red-600 font-bold' : 'bg-gray-400'}`}>
              O
            </div>
          </div>
        </div>
      </div>

      {/* Status message */}
      <div className="mb-4 text-2xl font-bold">{status}</div>

      {/* Game board */}
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