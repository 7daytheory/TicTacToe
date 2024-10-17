import React, { useState } from 'react'; // Import React and useState hook from React library
import Square from '../Square/Square'; // Import the Square component from the specified path

const Board = () => {
  // Initialize state for the board squares
  // `squares` is an array of 9 elements representing the 9 squares of the board.
  // Initially, all squares are set to `null` (no moves made).
  // `setSquares` is the function to update the state.
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Render a single square by passing the current value (either 'X', 'O', or null) 
  const renderSquare = (i) => {
    return (
      <Square
        value={squares[i]}
      />
    );
  };

  return (
    <div className="flex flex-col items-center justify-center mt-8">

      {/* Render the 3 rows */}
      <div className="flex">
        {renderSquare(0)} {/* Render square at index 0  - 8 (1-9)*/}
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

export default Board
