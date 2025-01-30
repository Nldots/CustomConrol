import React, { useState } from 'react';
 // Assuming you move the CSS to a separate file

const MyCustomControl = () => {
  const [activeButton, setActiveButton] = useState('Present');

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <div className="toggle-container">
      <label className="toggle-label">Individual</label>
      <div className="toggle-group">
        <button
          className={`toggle-button ${activeButton === 'Present' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Present')}
        >
          Present
        </button>
        <button
          className={`toggle-button ${activeButton === 'Not Present' ? 'active' : ''}`}
          onClick={() => handleButtonClick('Not Present')}
        >
          Not Present
        </button>
      </div>
    </div>
  );
};

export default MyCustomControl;