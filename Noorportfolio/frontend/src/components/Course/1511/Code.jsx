import React from "react";
import { useNavigate } from "react-router-dom"; 

const Custom = () => {

  return (
    <div className="notes-container">
      <h1 style={{ textDecoration: "underline" }} className="notes-title">📖 </h1>

      <section className="note-section" style={{ color: "black", fontFamily: "'Trebuchet MS', sans-serif", textAlign: "left" }}>
        <h3 className="underline">C Programming Questions & Solutions</h3>
        <p> The structure of the contents will be problem solving based:
            <li>1. planning - understanding the question </li>
            <li>2. visualising - diagramming our plan (for the visual learners) </li>
            <li>3. getting to the solution - step by step </li>
             </p>
             
             <h3> I'm currently simplifying the concepts, and will add it here once done!</h3>
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
