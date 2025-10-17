import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Switch from "./components/Switch";

import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resources from "./components/Resources";
import Loader from "./components/Loading";

const TypingText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayText("");

    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      index++;
      if (index >= text.length) {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className="gradient radial">{displayText}</div>;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <header>
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        <TypingText text={"NOOR'S PORTFOLIO"} speed={100} />
        <nav>
          <Link to="/" className="button-heading">ABOUT ME</Link>
          <Link to="/projects" className="button-heading">PROJECTS</Link>
          <Link to="/resources" className="button-heading">RESOURCES</Link>
          <Link to="/blog" className="button-heading">BLOG</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>

      <div className="social-links">
        <a href="https://github.com/noorbabar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/noorbabar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="mailto:nbabar233@gmail.com">
          <i className="fas fa-envelope"></i> Email
        </a>
      </div>
    </div>
  );
};

export default App;
