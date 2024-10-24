// MainBoard.js
import React from 'react';

const MainBoard = ({ squares, handleClick }) => {
  const renderSquare = (i) => {
    return (
      <button
        className="w-[8rem] h-[8rem] border-2 border-gray-800 flex items-center justify-center text-6xl"
        onClick={() => handleClick(i)}
      >
        {squares[i]}
      </button>
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-1/2 p-4">
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

export default MainBoard;
