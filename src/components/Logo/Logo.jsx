import React, { useState } from 'react';
import Banner from '../Banner/Banner';

const Logo = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev); // Toggle instructions visibility
  };

  return (
    <div className="w-full">
      {/* Navigation section */}
      <div className="bg-slate-800 text-white p-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-[900px] p-2">
          <div className="text-2xl">Tic Tac Toe</div>
          <p className="cursor-pointer hover:text-gray-200" onClick={toggleInstructions}>
            Instructions
          </p>
        </div>
      </div>

      <div>
        <Banner showInstructions={showInstructions} />
      </div>
    </div>
  );
};

export default Logo;
