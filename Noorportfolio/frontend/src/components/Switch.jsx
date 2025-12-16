import React from "react";

const Switch = ({ darkMode, setDarkMode }) => {
  return (
    <div className="switch">
      <input 
        id="toggle" 
        type="checkbox" 
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)} 
      />
      <label className="toggle" htmlFor="toggle"></label>
    </div>
  );
};

export default Switch;