import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../style/home.css';
import '../style/utilities.css';

const About = () => {
  const [interests, setInterests] = useState("Watching K-Dramas");
  const [movies, setMovies] = useState("Maze Runner");
  const [showFunFacts, setShowFunFacts] = useState(false);

  useEffect(() => {
    const interestsList = [
      "Gym", "Lifting", "Watching the sunrise", "Badminton",
      "Hanging out w my friends", "Baking", "Traveling",
      "Taking naps", "Chess", "Walking my cat"
    ];

    const moviesList = [
      "Black Panther", "Maze Runner", "Night Agent", "Venom", "Alchemy of Souls",
      "Prison Break", "The Punisher", "Divergent", "White Chicks", "Business Proposal",
      "Avatar", "Karate Kid", "+ 200 more"
    ];

    let i = 0, m = 0;

    const interestsInterval = setInterval(() => {
      setInterests(interestsList[i]);
      i = (i + 1) % interestsList.length;
    }, 2500);

    const moviesInterval = setInterval(() => {
      setMovies(moviesList[m]);
      m = (m + 1) % moviesList.length;
    }, 2500);

    return () => {
      clearInterval(interestsInterval);
      clearInterval(moviesInterval);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const catMedia = [
    { type: "image", src: "/cat1.jpg", alt: "Milo playing with a toy" },
    { type: "image", src: "/cat2.jpg", alt: "Milo napping peacefully" },
    { type: "image", src: "/cat3.jpg", alt: "Milo looking curious" },
    { type: "video", src: "/cat4.mp4", alt: "Milo playing", autoplay: true },
    { type: "video", src: "/cat5.mov", alt: "Milo exploring", autoplay: true },
  ];

  return (
    <section className="about-section">
      <motion.div
        className="intro-block"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="about-me-heading">ABOUT ME</h1>
        <p className="intro-line">Hi, I’m <strong>Noor</strong> — a passionate <span>Computer Science student</span> at UNSW majoring in Security Engineering.</p>
        <p> I love everything about the field of Cybersecurity. Big fan of solving problems & building cool things!</p>
        <p> I aim to become a Penetration Tester or Cyber Security Analyst!</p>
        <p><small><em>Always learning. Always building.</em></small></p>
        <p>Check out my <strong>Projects</strong>, <strong>Resources</strong>, or <strong>Articles</strong> to learn more!</p>
      </motion.div>

      <motion.div
        className="fun-facts-toggle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
      <button onClick={() => setShowFunFacts(!showFunFacts)} className="gradient-button">
          {showFunFacts ? "Hide Fun Facts" : "Show Fun Facts"}
        </button>
      </motion.div>

      {showFunFacts && (
        <motion.div
          className="fun-facts-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
        <h1 className="about-me-heading">FUN FACTS</h1>
          <table className="fun-table">
            <tbody>
              <tr><td><strong>Age:</strong></td><td>20</td></tr>
              <tr><td><strong>Quote:</strong></td><td>"When you set your mind to something, you’ll always find a way to make it work." — Imam Ghazali</td></tr>
              <tr><td><strong>Best Advice:</strong></td><td>"If you only do what you can do, you'll never be more than you are now. The only true limit is the one you set for yourself" - Shifu </td></tr>
              <tr><td><strong>Current Interest:</strong></td><td><span className="highlight">{interests}</span></td></tr>
              <tr><td><strong> Fav Movie/Show:</strong></td><td><span className="highlight">{movies}</span></td></tr>
            </tbody>
          </table>

          <h1 className="about-me-heading">🐾 Meet my best friend, MILO!</h1>
          <Slider {...sliderSettings}>
            {catMedia.map((item, index) => (
              <div key={index} className="media-container">
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} className="media" />
                ) : (
                  <video
                    src={item.src}
                    className="media"
                    controls
                    autoPlay={item.autoplay}
                    muted
                  />
                )}
              </div>
            ))}
          </Slider>
        </motion.div>
      )}
    </section>
  );
};

export default About;
