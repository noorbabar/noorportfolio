import React, { useState, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom"; // Import required components from react-router-dom
import "./App.css";

// Import components for different pages
import About from "./components/About";
import Projects from "./components/Projects";
import Journal from "./components/Journal";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [interests, setInterests] = useState("Watching K-Dramas");
  const [movies, setMovies] = useState("Maze Runner");

  useEffect(() => {
    const interestsList = [
      "Gym",
      "Photography",
      "Journaling",
      "Watching the sunset",
      "Going to the beach",
      "Baking",
      "Self-care activities",
      "Traveling",
      "Being in nature",
      "Learning about my religion",
      "Taking naps",
      "Walking my cat",
    ];

    const moviesList = [
      "Maze Runner",
      "20th Century Girl",
      "Venom",
      "True Beauty",
      "The Fault in Our Stars",
      "Divergent",
      "White Chicks",
      "Black Panther",
      "Avatar",
      "Karate Kid",
      "Tangled",
      "Big Hero 6 + 200 more",
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

    return () => {
      clearInterval(interestsInterval);
      clearInterval(moviesInterval);
    };
  }, []);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
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
          <Link to="/" className="button-heading">ABOUT ME</Link> {/* Link to the home/About page */}
          <Link to="/projects" className="button-heading">PROJECTS</Link>
          <Link to="/journal" className="button-heading">JOURNAL</Link>
        </nav>
      </header>

      <main>
        <Routes>
          {/* Set the About component as the landing page */}
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/journal" element={<Journal />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
