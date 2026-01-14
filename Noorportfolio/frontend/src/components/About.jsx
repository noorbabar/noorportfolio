import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../style/about.css";

const About = () => {
  const [showFunFacts, setShowFunFacts] = useState(false);
  const [showMilo, setShowMilo] = useState(false);

  return (
    <section className="about-section">
      <div className="intro">
        <h1>helloo, i'm noor </h1>
        <p className="lead">
          computer science student @ unsw, majoring in security engineering.
        </p>
        <p>
          i'm passionate about making an impact, solving problems, building useful things, and continuously learning and growing !
        </p>
        <p>
          currently focused on cybersecurity, penetration testing, and secure software development.
        </p>
      </div>

      <div className="call-to-action">
        <p>
          check out my <Link to="/Projects">projects</Link>, browse my{' '}
          <Link to="/Resources">study resources</Link>, or read my{' '}
          <Link to="/Blog">blog posts</Link> to learn more about what i'm working on.
        </p>
      </div>

      <div className="button-group">
        <button 
          onClick={() => setShowFunFacts(!showFunFacts)} 
          className="toggle-button"
        >
          {showFunFacts ? "hide fun facts" : "show fun facts"}
        </button>
        
        <button 
          onClick={() => setShowMilo(!showMilo)} 
          className="toggle-button"
        >
          {showMilo ? "hide milo 🐱" : "meet milo 🐱"}
        </button>
      </div>

      {showFunFacts && (
        <div className="fun-facts">
          <h2>fun facts</h2>
          <div className="facts-grid">
            <div className="fact">
              <span className="fact-label">age:</span>
              <span className="fact-value">20</span>
            </div>
            <div className="fact">
              <span className="fact-label">interests:</span>
              <span className="fact-value">gym, lifting, badminton, chess, cooking, k-dramas, travelling & trying out new things</span>
            </div>
            <div className="fact">
              <span className="fact-label">gym stats:</span>
              <span className="fact-value">
                <a 
                  href="https://hevy.com/user/nnn_b?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnRDDtyKWHD1CXaKQIkt9O27Axwx4XrpIebJ2dH3-zD1Cc8EWwtHpZQIYDYPg_aem_3WGNauEnEvIWDgPARxF1jQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hevy-link"
                >
                  hevy →
                </a>
              </span>
            </div>
            <div className="fact">
              <span className="fact-label">favorite quote:</span>
              <span className="fact-value">"when you set your mind to something, you'll always find a way to make it work" - imam ghazali</span>
            </div>
          </div>
        </div>
      )}

      {showMilo && (
        <div className="milo-section">
          <h2>meet milo!</h2>
          <p className="muted">my cat who makes everything better</p>
          <div className="media-grid">
            <img src="/cat1.jpg" alt="Milo playing" className="media-item" />
            <img src="/cat2.jpg" alt="Milo napping" className="media-item" />
            <img src="/cat3.jpg" alt="Milo curious" className="media-item" />
            <video src="/cat4.mp4" className="media-item" controls muted />
            <video src="/cat5.mov" className="media-item" controls muted />
          </div>
        </div>
      )}
    </section>
  );
};

export default About;