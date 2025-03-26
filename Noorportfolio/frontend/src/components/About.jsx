import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "../App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const About = () => {
  const [interests, setInterests] = useState("Watching K-Dramas");
  const [movies, setMovies] = useState("Maze Runner");
  const [showFunFacts, setShowFunFacts] = useState(false);

  useEffect(() => {
    const interestsList = [
      "Gym", "Lifting", "Watching the sunrise","Badminton",
      "Hanging out w my friends", "Baking", "Traveling",
      "Taking naps","Chess", "Walking my cat"
    ];

    const moviesList = [
      "Black Panther", "Maze Runner", "Night Agent", "Venom", "Alchemy of Souls", "Prison Break", "The Punisher",
      "Divergent", "White Chicks", "Business Proposal", "Avatar", "Karate Kid", "+ 200 more"
    ];

    let interestsIndex = 0;
    let moviesIndex = 0;

    const interestsInterval = setInterval(() => {
      setInterests(interestsList[interestsIndex]);
      interestsIndex = (interestsIndex + 1) % interestsList.length;
    }, 2000);

    const moviesInterval = setInterval(() => {
      setMovies(moviesList[moviesIndex]);
      moviesIndex = (moviesIndex + 1) % moviesList.length;
    }, 2000);

    return () => {
      clearInterval(interestsInterval);
      clearInterval(moviesInterval);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    centerMode: false,
    slidesToScroll: 1,
    edgeFriction: 0.15,
    variableWidth: false, 
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const catMedia = [
    { type: "image", src: "/cat1.jpg", alt: "Milo playing with a toy" },
    { type: "image", src: "/cat2.jpg", alt: "Milo napping peacefully" },
    { type: "image", src: "/cat3.jpg", alt: "Milo looking curious" },
    { type: "video", src: "/cat4.mp4", alt: "Milo playing", autoplay: true },
    { type: "video", src: "/cat5.mov", alt: "Milo exploring", autoplay: true },
  ];

  return (
    <section>
      <h1 className="about-me-heading">ABOUT ME</h1>
      <div className="card"> I'm Noor</div>

      <p> A passionate second year computer science student majoring in Security Engineering at UNSW, with a love for
            full-stack development and Cybersecurity.</p>
      <p>
        <small>
          a <em>beginner, actively progressing and learning...</em>
        </small>
      </p>

      <p>
        I'm aspiring to become a Software / Security Engineer, Analyst or Penetration Tester. I’m driven by problem-solving and
        constantly explore ways to grow as both a learner and a creator.
      </p>
      <p>
        Feel free to check out the sections above — Projects, Resources,
        Articles --
      </p>

      <div className="fun-facts-toggle">
        <button
          onClick={() => setShowFunFacts(!showFunFacts)}
          className="toggle-button"
        >
          {showFunFacts ? "HIDE FUN FACTS" : "SHOW FUN FACTS"}
        </button>
      </div>

      {showFunFacts && (
        <div className="fun-facts-section">
          <h1 className="about-me-heading">FUN FACTS</h1>
          <table>
            <tbody>
              <tr>
                <td><strong>Age</strong></td>
                <td>20</td>
              </tr>
              <tr>
                <td><strong>Favourite Quote</strong></td>
                <td>"When you set your mind to something, you’ll always find a way to make it work." — Imam Ghazali</td>
              </tr>
              <tr>
                <td><strong> Best piece of Advice </strong></td>
                <td>Comparison is the thief of joy -- it's you vs you.</td>
              </tr>
              <tr>
                <td><strong>Interests</strong></td>
                <td>{interests}</td>
              </tr>
              <tr>
                <td><strong>Favourite Movies/Shows</strong></td>
                <td>{movies}</td>
              </tr>
            </tbody>
          </table>

          <h2>THIS IS MY CAT MILO</h2>
          <Slider {...sliderSettings}>
            {catMedia.map((item, index) => (
              <div key={index} className="media-container">
                {item.type === "image" ? (
                  <img src={item.src} alt={item.alt} className="media" />
                ) : (
                  <video
                    src={item.src}
                    alt={item.alt}
                    className="media"
                    controls
                    autoPlay={item.autoplay}
                  />
                )}
              </div>
            ))}
          </Slider>
        </div>
      )}
    </section>
  );
};

export default About;
