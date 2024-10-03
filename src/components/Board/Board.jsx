import React from 'react';
import Square from '../Square/Square';
import ReactDOM from 'react-dom';

const Board = ({ squares }) => {
    console.log(squares);
  const renderSquare = (i) => {
    if (!squares || !squares[i]) return null;
    return (
      <Square
        value={squares[i]}
        onClick={() => handleClick(i)}
      />
    );
  };
  

  return (
    <div className="flex flex-col items-center justify-center">
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
