import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import logoWhite from '../../assets/logo-white.svg';

const Logo = () => {
  const [showInstructions, setShowInstructions] = useState(false);

  const toggleInstructions = () => {
    setShowInstructions((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="bg-slate-800 text-white p-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-[900px] p-2">
          <img src={logoWhite} alt="Tic Tac Toe" />
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
