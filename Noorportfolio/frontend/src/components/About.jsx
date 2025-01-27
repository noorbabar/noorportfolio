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
      "Gym", "Lifting", "Journaling", "Watching the sunrise","Badmington",
      "Hanging out w my friends", "Baking", "Self-care activities", "Traveling",
      "Taking naps","Chess", "Walking my cat"
    ];

    const moviesList = [
      "Black Panther", "Maze Runner", "Night Agent", "Venom", "Alchemy of Souls", "Prison Break", "The Punisher",
      "Divergent", "White Chicks", "Business Proposal", "Avatar", "Karate Kid", "Tangled", "+ 200 more"
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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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
    { type: "image", src: "/cat1.jpg", alt: " playing" },
    { type: "image", src: "/cat2.jpg", alt: " napping" },
    { type: "image", src: "/cat3.jpg", alt: " looking curious" },
    { type: "video", src: "/cat4.mp4", alt: "playin", autoplay: true },
    { type: "video", src: "/cat5.mov", alt: "playin", autoplay: true },

  ];

  return (
    <section>
      <h1 className="about-me-heading">ABOUT ME</h1>
      <p>Hi! I'm Noor, a Second Year Computer Science Student at UNSW.</p>
      <p>
        <small>
          a <em>beginner, actively progressing and learning...</em>
        </small>
      </p>

      <p>
        I'm currently majoring in Security Engineering at UNSW, aspiring to
        become a cybersecurity Engineer, Analyst or Penetration Tester who
        safeguards the digital world.
      </p>
      <p>
        My passion lies in programming and creating innovative solutions that
        prioritise security and functionality. I’m driven by problem-solving and
        constantly exploring ways to grow as both a learner and a creator.
      </p>
      <p>
        Feel free to check out the sections above — Projects, Resources,
        Articles, and Journals - to see what I’ve been working on, the
        knowledge I’ve shared, and the milestones I’ve reached along the way.
      </p>
      <div className="fun-facts-toggle">
        <button
          onClick={() => setShowFunFacts(!showFunFacts)}
          className="toggle-button"
        >
          {showFunFacts ? "nvm I don't want to see this" : "SHOW FUN FACTS ABOUT NOOR"}
        </button>
      </div>

      {showFunFacts && (
        <div className="fun-facts-section">
          <h2>Fun Facts</h2>
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
                <td><strong>Favourite Movies/Shows</strong></td>
                <td>{movies}</td>
              </tr>
            </tbody>
          </table>

          <h3>THIS IS MY CAT MILO</h3>
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
