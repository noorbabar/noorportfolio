import React from "react";
import { useNavigate } from "react-router-dom"; 

const Problems = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/resources"); 
  };

  const handleNextTopicClick = () => {
    alert("No next topic yet!");
  };

  return (
    <div>
      <h1> COLLECTION OF USEFUL LEETCODE LINKS</h1>

      <section class="centered-content">
        <p>
        <a 
        href="https://www.blog.codeinmotion.io/p/how-to-start-leetcode" 
        target="_blank" 
        rel="noopener noreferrer"
        > How to start LeetCode in 2025
        </a>
        <p>If you're completely new to LeetCode or haven't taken data structures and algorithms yet, check out this article which contains a step by step tutorial on how to get started!
</p>        
        </p>
      </section>

      <section class="centered-content">
        <p>
        <a 
        href="https://www.techinterviewhandbook.org/coding-interview-study-plan/" 
        target="_blank" 
        rel="noopener noreferrer"
        > Tech Interview Handbook - Study Plan for Leetcode
        </a>
        <p>Before you start solving LeetCode questions, it's important to have a solid preparation strategy. Not sure where to begin or how to prepare effectively? Click the link above!</p>        </p>
      </section>

      <section class="centered-content">
  <p>
    <a 
      href="https://neetcode.io/roadmap" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      NeetCode - Roadmap for Beginners
    </a>
  </p>
  <p>If you're just starting out, the NeetCode roadmap provides a great beginner-friendly guide to help you get started with LeetCode problems, covering all the essential topics you need to know to build a strong foundation.</p>
</section>

<section class="centered-content">
  <p>
    <a 
      href="https://cses.fi/problemset/" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      CSES Problem Set - For Experienced Programmers
    </a>
  </p>
  <p>If you're already comfortable with the basics and want to challenge yourself, the CSES Problem Set offers a collection of more difficult problems designed to push your skills to the next level.</p>
</section>

      <section class="centered-content">
    <p>
        <a 
        href="https://leetcode.com/discuss/general-discussion/460599/blind-75-leetcode-questions" 
        target="_blank" 
        rel="noopener noreferrer">
            Blind 75 LeetCode Questions
        </a>
         <p>
        The Blind 75 LeetCode Questions is a curated list of 75 essential coding interview questions that cover the most commonly tested topics in software engineering interviews.
    </p>
    </p>
</section>

<section class="centered-content">
        <p>
        <a 
        href="https://leetcode.com/problem-list/rab78cw1/" 
        target="_blank" 
        rel="noopener noreferrer"
        > Grind 75 LeetCode Questions
        </a>
        <p>Grind 75 is a carefully selected set of 75 LeetCode problems that are designed to help you level up your coding skills and prepare for software engineering interviews. The list includes problems of varying difficulty, but most fall under the intermediate to advanced level. It's perfect for those who have mastered basic data structures and algorithms and are ready to tackle more complex problems to refine their problem-solving abilities.</p>
        </p>
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

export default Problems;
