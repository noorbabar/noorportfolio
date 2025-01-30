import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const IntroToC = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/resources"); 
  };

  const handleNextTopicClick = () => {
    navigate("/arrays"); 
  };

  return (
    <div>
      <h1> INTRO TO C PROGRAMMING</h1>
      <section>
        <h3>WHAT IS C?</h3>
        <p>Introduction to C programming language.</p>
      </section>
      <section>
        <h3>Basic Syntax</h3>
        <p>Explanation of basic syntax in C programming.</p>
      </section>

      <button onClick={handleBackClick} className="back-button">
        Back to Resources
      </button>

      <button onClick={handleNextTopicClick} className="next-topic-button">
        Next Topic
      </button>
    </div>
  );
};

export default IntroToC;
