import React from "react";
import { useNavigate } from "react-router-dom"; 

const Arrays = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/intro-to-c"); 
  };

  const handleNextTopicClick = () => {
    alert("No next topic yet!");
  };

  return (
    <div>
      <h1> ARRAYS</h1>
      <section>
        <h3>What is an Array?</h3>
        <p>Explanation of arrays in C programming.</p>
      </section>
      <section>
        <h3>Basic Syntax</h3>
        <p>Explanation of array syntax in C programming.</p>
      </section>

      <button onClick={handleBackClick} className="back-button">
        Back to Intro to C
      </button>

      <button onClick={handleNextTopicClick} className="next-topic-button">
        Next Topic
      </button>
    </div>
  );
};

export default Arrays;
