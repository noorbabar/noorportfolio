import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaMoon, FaSun } from 'react-icons/fa'; 

import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Resources from "./components/Resources";

import Arrays from "./components/Course/1511/Arrays";
import IntroToC from "./components/Course/1511/IntroToC";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
          <header>
          <button
          id="darkModeToggle"
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          >
           {darkMode ? <FaSun /> : <FaMoon />}
          </button>

  

            <div className="gradient radial">NOOR'S PORTFOLIO</div>
            <nav>
              <Link to="/" className="button-heading">ABOUT ME</Link>
              <Link to="/projects" className="button-heading">PROJECTS</Link>
              <Link to="/resources" className="button-heading">RESOURCES</Link>
              <Link to="/articles" className="button-heading">ARTICLES</Link>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/articles" element={<Articles />} />

              <Route path="/arrays" element={<Arrays />} /> 
              <Route path="/intro-to-c" element={<IntroToC />} />  
            </Routes>
          </main>
    </div>
  );
};

export default App;
