import React from "react";
import "../App.css";
import "../style/resources.css";

const Resources = () => {
  const resources = [
    {
      subject: "C Programming Fundamentals",
      link: "",
    },
    {
      subject: "Data Structures & Algorithms",
      link: "",
    },
    {
      subject: "Intro To Networking & Security",
      link: "",
    },
    {
      subject: "Cybersecurity Management",
      link: "",
    },
    {
      subject: "Intro To Cyber Security & Security Engineering",
      link: "",
    },
    {
      subject: "Object Oriented Programming",
      link: "",
    },
    {
      subject: "Professional Issues and Ethics in IT",
      link: "",
    },
    {
      subject: "CTF Resources",
      link: "",
    },
    {
      subject: "LeetCode Resources",
      link: "",
    },
      {
      subject: "Incoming in 2026: 3121, 6445, 6447, 6448, 6080, 2041, 3900 ",
      link: "",
    },
  ];

  return (
     <div className="resources-page">
      <h1 className="about-me-heading">RESOURCES</h1>
         <div className="resources-container">
      <div className="sidebar">
        <h3>these are a compilation of my uni notes & resources (i'll be adding in the links soon!) :)</h3>


        {resources.map((item, index) => (
          <div key={index} className="subject">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="subject-title"
            >
              {item.subject}
              <span className="arrow">&#9654;</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Resources;
