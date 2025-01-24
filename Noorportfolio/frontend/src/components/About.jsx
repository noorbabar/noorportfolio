import React, { useState, useEffect } from "react";
import "../App.css";

const About = () => {
  const [interests, setInterests] = useState("Watching K-Dramas");
  const [movies, setMovies] = useState("Maze Runner");

  useEffect(() => {
    const interestsList = [
      "Gym", "Photography", "Journaling", "Watching the sunset",
      "Going to the beach", "Baking", "Self-care activities",
      "Traveling", "Being in nature", "Learning about my religion",
      "Taking naps", "Walking my cat",
    ];

    const moviesList = [
      "Maze Runner", "20th Century Girl", "Venom", "True Beauty", 
      "The Fault in Our Stars", "Divergent", "White Chicks", "Black Panther",
      "Avatar", "Karate Kid", "Tangled", "Big Hero 6 + 200 more",
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
    <section>
      <h1 className="about-me-heading">ABOUT ME</h1>
      <p>Hi! I'm Noor, a Computer Science Student at UNSW.</p>
      <p>
        <small>
          a <em>beginner, actively progressing and learning...</em>
        </small>
      </p>

      <p>
        I'm passionate about programming, creating projects, and cybersecurity.
        Programming allows me to create and innovate, while cybersecurity ensures
        the safety and integrity of those creations in our digital world.
      </p>

      <p>In addition to my academic interests, below are some fun facts about me:</p>
      <table>
        <tbody>
          <tr>
            <td><strong>Age</strong></td>
            <td>19</td>
          </tr>
          <tr>
            <td><strong>Degree</strong></td>
            <td>Computer Science</td>
          </tr>
          <tr>
            <td><strong>Major</strong></td>
            <td>Cybersecurity</td>
          </tr>
          <tr>
            <td><strong>Interests</strong></td>
            <td>{interests}</td>
          </tr>
          <tr>
            <td><strong>Favourite Movies</strong></td>
            <td>{movies}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default About;
