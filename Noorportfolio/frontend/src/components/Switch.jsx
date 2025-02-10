import React from "react";
import "../App.css"; // Import the CSS file

const Switch = ({ darkMode, setDarkMode }) => {
  return (
    <div className="switch">
      <input 
        id="toggle" 
        type="checkbox" 
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)} 
      />
      <label className="toggle" htmlFor="toggle">
        <i />
      </label>
    </div>
  );
};

export default Switch;
