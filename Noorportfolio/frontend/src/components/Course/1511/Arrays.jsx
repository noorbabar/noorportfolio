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
        <h3> content will be added soon</h3>
        <p></p>
      </section>
      <section>
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
