import React, { useState } from 'react';

const Board = () => {
  const [setSquares, setSetSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Handle a square click
  const handleClick = (i) => {
    const newSquares = squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    //Switch between X and O
    newSquares[i] = xIsNext ? 'X' : 'O';

    // set Squares state with newSquares value which has been updates , and also switch between player 1 and 2
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

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

      {/* Middle Line */}
      <div className="w-1 bg-black h-full"></div>

      {/*  Board */}
      <div className="w-1/4 flex flex-col items-center justify-center bg-gray-200">
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
    </div>
  );
};

export default Board;