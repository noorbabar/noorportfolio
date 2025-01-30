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
      <h3> content will be added soon</h3>
        <p></p>
      </section>
      <section>
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
