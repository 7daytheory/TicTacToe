import React, { useState } from 'react';
import Banner from '../Banner/Banner';

const Logo = () => {
  const [showBanner, setShowBanner] = useState(false);

  const toggleInstructions = () => {
    setShowBanner((prev) => !prev);
  };

  return (
    <div>
      <div className="bg-slate-800 text-white p-2 w-full flex justify-center">
        <div className="flex justify-between items-center w-[900px] p-2">
          <div className="text-2xl">Tic Tac Toe</div>
          <p className="cursor-pointer hover:text-gray-200" onClick={toggleInstructions}>
            Instructions
          </p>
        </div>
      </div>

      {showBanner && <Banner />}
    </div>
  );
};

export default Logo;
