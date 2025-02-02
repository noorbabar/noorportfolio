import React from "react";
import { useNavigate } from "react-router-dom"; 

const Loops = () => {

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 Control Flow</h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">Loops</h3>
        <p></p>
        <li></li>
</section>

      <div className="navigation-buttons">
        <button onClick={() => navigate("/resources")} className="nav-button">
          Back to Resources
        </button>
        <button onClick={() => navigate("/loops")} className="nav-button">
          Next Topic
        </button>
      </div>
    </div>
  );
};

export default Loops;
