import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Projects from "./components/Projects";
import Journal from "./components/Journal";
import Articles from "./components/Articles";
import Resources from "./components/Resources";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [interests, setInterests] = useState("Watching K-Dramas");
  const [movies, setMovies] = useState("Maze Runner");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interestsList = [
      "Gym", "Lifting", "Journaling", "Watching the sunrise",
      "Hanging out w my friends", "Baking", "Self-care activities", "Traveling",
      "Being in nature", "Taking naps", "Walking my cat"
    ];

    const moviesList = [
      "Black Panther", "Maze Runner", "Night Agent", "Venom", "Alchemy of Souls", "The Fault in Our Stars",
      "Divergent", "White Chicks", "Business Proposal", "Avatar", "Karate Kid", "Tangled", "Big Hero 6 + 200 more"
    ];

    let interestsIndex = 0;
    let moviesIndex = 0;

    const interestsInterval = setInterval(() => {
      setInterests(interestsList[interestsIndex]);
      interestsIndex = (interestsIndex + 1) % interestsList.length;
    }, 3000);

    const moviesInterval = setInterval(() => {
      setMovies(moviesList[moviesIndex]);
      moviesIndex = (moviesIndex + 1) % moviesList.length;
    }, 3000);

    const loadingTimeout = setTimeout(() => {
      setIsLoading(false); 
    }, 3000);

    return () => {
      clearInterval(interestsInterval);
      clearInterval(moviesInterval);
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {isLoading ? (
        <div className="loadingScreen">
          <div className="cat">
            <span>◍</span>
            <span>◍</span>
            <span>◍</span>
            <span>◍</span>
            <span>◍</span>
          </div>
          <div className="loadingText">
           Loading Noor's Portfolio... Please Wait!
           </div>
        </div>
      ) : (
        <>
          <header>
            <button
              id="darkModeToggle"
              className="dark-mode-toggle"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <div className="gradient radial">NOOR'S PORTFOLIO</div>
            <nav>
              <Link to="/" className="button-heading">ABOUT ME</Link>
              <Link to="/projects" className="button-heading">PROJECTS</Link>
              <Link to="/resources" className="button-heading">RESOURCES</Link>
              <Link to="/articles" className="button-heading">ARTICLES</Link>
              <Link to="/journal" className="button-heading">JOURNAL</Link>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/articles" element={<Articles />} />
            </Routes>
          </main>
        </>
      )}
    </div>
  );
};

export default App;
