import React, { useState } from 'react';

const Board = () => {
  const [setSquares, setSetSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(Null);

  return (
    <div className="flex flex-row justify-center items-center h-screen">
      {/* Left Board */}
      <div className="w-1/4 flex flex-col items-center justify-center bg-gray-200">
        <div className="mb-4 text-2xl font-bold">Status</div>
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
        <div className="mb-4 text-2xl font-bold">Status</div>
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


/*
  // State for the board on the left side
  const [leftSquares, setLeftSquares] = useState(Array(9).fill(null));
  const [xIsNextLeft, setXIsNextLeft] = useState(true);

  // State for the board on the right side
  const [rightSquares, setRightSquares] = useState(Array(9).fill(null));
  const [xIsNextRight, setXIsNextRight] = useState(true);

  // Handle click for the left board
  const handleClickLeft = (i) => {
    const newSquares = leftSquares.slice();
    if (calculateWinner(leftSquares) || leftSquares[i]) {
      return;
    }
    newSquares[i] = xIsNextLeft ? 'X' : 'O';
    setLeftSquares(newSquares);
    setXIsNextLeft(!xIsNextLeft);
  };

  // Handle click for the right board
  const handleClickRight = (i) => {
    const newSquares = rightSquares.slice();
    if (calculateWinner(rightSquares) || rightSquares[i]) {
      return;
    }
    newSquares[i] = xIsNextRight ? 'X' : 'O';
    setRightSquares(newSquares);
    setXIsNextRight(!xIsNextRight);
  };

  // Render square for the left board
  const renderSquareLeft = (i) => {
    return (
      <Square
        value={leftSquares[i]}
        onClick={() => handleClickLeft(i)}
      />
    );
  };

  // Render square for the right board
  const renderSquareRight = (i) => {
    return (
      <Square
        value={rightSquares[i]}
        onClick={() => handleClickRight(i)}
      />
    );
  };

  // Status messages for both boards
  const statusLeft = `Next player: ${xIsNextLeft ? 'X' : 'O'}`;
  const statusRight = `Next player: ${xIsNextRight ? 'X' : 'O'}`;

  */