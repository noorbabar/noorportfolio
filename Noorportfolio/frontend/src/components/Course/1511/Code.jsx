import React from "react";
import { useNavigate } from "react-router-dom"; 

const Custom = () => {

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 </h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">The topic</h3>
        <p>add info here and like dotpoints </p>
        <li></li>
</section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/functions")} className="nav-button">
          Next Topic - Functions
        </button>
      </div>
    </div>
  );
};

export default Custom;
