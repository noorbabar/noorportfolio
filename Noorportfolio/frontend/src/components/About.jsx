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
      "Gym", "Lifting", "Watching the sunrise","Badmington",
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
        I'm currently majoring in Security Engineering, aspiring to
        become a Cybersecurity/Software Engineer, Analyst or Penetration Tester who
        safeguards the digital world. My passion lies in programming and creating innovative solutions that
        prioritise security and functionality. I’m driven by problem-solving and
        constantly explore ways to grow as both a learner and a creator.
      </p>
      <p>
        Feel free to check out the sections above — Projects, Resources,
        Articles, and Journal - to see what I’ve been working on, the
        knowledge I’ve shared, and the milestones I’ve reached along the way.
      </p>
      <div className="fun-facts-toggle">
        <button
          onClick={() => setShowFunFacts(!showFunFacts)}
          className="toggle-button"
        >
          {showFunFacts ? "nvm i don't want to see this" : "SHOW FUN FACTS ABOUT NOOR"}
        </button>
      </div>

      {showFunFacts && (
        <div className="fun-facts-section">
        <h1 className="about-me-heading">FUN FACTS</h1>
          <table>
            <tbody>
              <tr>
                <td><strong>Age</strong></td>
                <td>19</td>
              </tr>
              <tr>
                <td><strong>Favourite Quote</strong></td>
                <td>"When you set your mind to something, you’ll always find a way to make it work." — Imam Ghazali</td>
              </tr>
              <tr>
                <td><strong> Best piece of Advice </strong></td>
                <td>Comparison is the thief of joy, where focus goes, energy flows -- it's you vs you :)</td>
              </tr>
              <tr>
                <td><strong> Fun Fact</strong></td>
                <td>I love Kdramas, Bubble Tea ( & i can RDL 1.5x my body weight)</td>
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
