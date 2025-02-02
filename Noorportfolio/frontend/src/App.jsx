import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import { FaMoon, FaSun } from 'react-icons/fa'; 

import About from "./components/About";
import Projects from "./components/Projects";
import Articles from "./components/Articles";
import Resources from "./components/Resources";

// these are files for 1511
import Variables from "./components/Course/1511/Variables";
import IntroToC from "./components/Course/1511/IntroToC";
import Statements from "./components/Course/1511/Statements";
import Loops from "./components/Course/1511/Loops";
import Custom from "./components/Course/1511/Custom";
import Functions from "./components/Course/1511/Functions";
import Arrays from "./components/Course/1511/Arrays";
import Strings from "./components/Course/1511/Strings";
import DiArrays from "./components/Course/1511/DiArrays";
import Arguments from "./components/Course/1511/Arguments";
import Pointers from "./components/Course/1511/Pointers";
import Memory from "./components/Course/1511/Memory";
import LinkedLists from "./components/Course/1511/LinkedLists";
import Code from "./components/Course/1511/Code";

// files for Leetcode
import Problems from "./components/Course/LeetCode/Problems";

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

              <Route path="/variables" element={<Variables />} /> 
              <Route path="/intro-to-c" element={<IntroToC />} />
              <Route path="/statements" element={<Statements />} />
              <Route path="/loops" element={<Loops />} />
              <Route path="/custom" element={<Custom />} />
              <Route path="/functions" element={<Functions />} />
              <Route path="/arrays" element={<Arrays />} />
              <Route path="/strings" element={<Strings />} />
              <Route path="/di-arrays" element={<DiArrays />} />
              <Route path="/arguments" element={<Arguments />} />
              <Route path="/pointers" element={<Pointers />} />
              <Route path="/memory" element={<Memory />} />
              <Route path="/pointers" element={<Pointers />} />
              <Route path="/linked-lists" element={<LinkedLists />} />
              <Route path="/code" element={<Code />} />

              <Route path="/problems" element={<Problems />} />  
              
            </Routes>
          </main>
    </div>
  );
};

export default App;
