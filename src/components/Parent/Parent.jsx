import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import Banner from '../Banner/Banner';

const Parent = () => {
  const [showBanner, setShowBanner] = useState(false);

  const toggleInstructions = () => {
    setShowBanner((prev) => !prev); // Toggle the banner visibility
  };

  return (
    <div>
      <Logo toggleInstructions={toggleInstructions} />
      {showBanner && <Banner />} {/* Show Banner if true */}
    </div>
  );
};

export default Parent;
