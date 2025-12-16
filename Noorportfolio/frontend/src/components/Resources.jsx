import React from "react";
import "../style/resources.css";

const Resources = () => {
  const resources = [
    { name: "C Programming Fundamentals", code: "COMP1511", link: "#" }, 
    { name: "Data Structures & Algorithms", code: "COMP2521", link: "#" },
    { name: "Intro to Networking & Security (HD)", code: "INFS1701", link: "#" },
    { name: "Cybersecurity Management", code: "INFS2701", link: "#" },
    { name: "Intro to Cyber Security & Security Engineering (HD)", code: "COMP6441", link: "#" },
    { name: "Object Oriented Programming", code: "COMP2511", link: "#" },
    { name: "Professional Issues and Ethics in IT (HD/CM)", code: "COMP4920", link: "#" },
    { name: "CTF Resources", code: "CTF", link: "#" },
    { name: "LeetCode Resources", code: "ALGO", link: "#" },
  ];

  const upcoming = [
    "COMP3121", "COMP6445", "COMP6443", 
    "COMP6448", "COMP6080", "COMP2041", "COMP3900",
    "COMP3900", "COMP1521"
  ];

  return (
    <div className="resources-section">
      <h1>resources</h1>
      <p className="section-description">
        comprehensive notes, guides, and materials from my coursework at unsw.
      </p>
      <p className="employer-note">
        <strong> links will be uploaded soon. </strong>these resources demonstrate my technical documentation skills, 
        understanding of core CS concepts, and commitment to continuous learning.
      </p>

      <div className="resources-list">
        {resources.map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className="resource-item"
            target={item.link !== "#" ? "_blank" : "_self"}
            rel={item.link !== "#" ? "noopener noreferrer" : ""}
          >
            <span className="resource-code">{item.code}</span>
            <span className="resource-name">{item.name}</span>
            <span className="resource-arrow">→</span>
          </a>
        ))}
      </div>

      <div className="upcoming-section">
        <h2>upcoming in 2026</h2>
        <div className="upcoming-list">
          {upcoming.map((code, index) => (
            <span key={index} className="upcoming-code">{code}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;