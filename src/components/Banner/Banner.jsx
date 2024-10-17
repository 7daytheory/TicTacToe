import React from 'react';

const Banner = ({ showInstructions }) => {
  return (
    <div className="w-full bg-red-600 p-8 text-white text-center space-y-6">
      <h1 className="text-2xl font-bold">Instructions: You may not have heard of this game so follow carefully.</h1>
      
      {/* Conditionally show instructions */}
      {showInstructions && (
        <div className="text-lg">
          <p>
            - Players take turns selecting a square.
            <br />
            - The first player to get 3 in a row (horizontal, vertical, or diagonal) wins!
            <br />
            - Use the "Restart" button to start over or go back to a previous move.
            <br />
            - Or use "History" to go back to any move of the game.
          </p>
        </div>
      )}
    </div>
  );
};

export default Banner;
