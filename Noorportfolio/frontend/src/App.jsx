import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import Switch from "./components/Switch";
import { Analytics } from "@vercel/analytics/react";
//import { Analytics } from "@vercel/analytics/next"
import About from "./components/About";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resources from "./components/Resources";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  const isActive = (path) => location.pathname === path;

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <Analytics />
      <header>
        <div className="header-top">
          <div className="site-title">noor's portfolio </div>
          <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <nav>
          <Link to="/" className={isActive("/") || isActive("/about") ? "active" : ""}>
            about
          </Link>
          <Link to="/projects" className={isActive("/projects") ? "active" : ""}>
            projects
          </Link>
          <Link to="/resources" className={isActive("/resources") ? "active" : ""}>
            resources
          </Link>
          <Link to="/blog" className={isActive("/blog") ? "active" : ""}>
            blog
          </Link>
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

      <footer className="social-links">
        <a href="https://github.com/noorbabar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> github
        </a>
        <a href="https://linkedin.com/in/noorbabar" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> linkedin
        </a>
        <a href="mailto:nbabar233@gmail.com">
          <i className="fas fa-envelope"></i> email
        </a>
      </footer>
    </div>
  );
};

export default App;