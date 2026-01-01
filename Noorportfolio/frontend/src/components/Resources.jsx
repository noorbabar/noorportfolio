import React, { useState } from "react";
import "../style/resources.css";

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);

  const resources = [
    { 
      name: "C Programming Fundamentals", 
      code: "COMP1511", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//20b955cde43a81d490cbe004b7941ed2",
      hasNotes: true 
    }, 
    { name: "Data Structures & Algorithms", code: "COMP2521", hasNotes: false },
    { name: "Intro to Networking & Security (HD)", code: "INFS1701", hasNotes: false },
    { name: "Cybersecurity Management", code: "INFS2701", hasNotes: false },
    { name: "Intro to Cyber Security & Security Engineering (HD)", code: "COMP6441", hasNotes: false },
    { name: "Object Oriented Programming", code: "COMP2511", hasNotes: false },
    { name: "Professional Issues and Ethics in IT (HD/CM)", code: "COMP4920", hasNotes: false },
    { name: "CTF Resources", code: "CTF", hasNotes: false },
    { name: "LeetCode Resources", code: "ALGO", hasNotes: false },
  ];

  const upcoming = [
    "COMP3121", "COMP6445", "COMP6443", 
    "COMP6448", "COMP6080", "COMP2041", "COMP3900",
    "COMP3900", "COMP1521"
  ];

  const handleResourceClick = (item) => {
    if (item.hasNotes) {
      setSelectedResource(item);
    }
  };

  const closeModal = () => {
    setSelectedResource(null);
  };

  return (
    <div className="resources-section">
      <h1>resources</h1>
      <p className="section-description">
        curated notes and materials from selected UNSW courses (math, electives, & gen eds not included).
      </p>    
      <p className="employer-note">
        <strong>click on any course to view my notes.</strong> these resources demonstrate my technical documentation skills, 
        understanding of core CS concepts, and commitment to continuous learning.
      </p>

      <div className="resources-list">
        {resources.map((item, index) => (
          <div 
            key={index} 
            onClick={() => handleResourceClick(item)}
            className={`resource-item ${item.hasNotes ? 'has-notes' : 'coming-soon'}`}
          >
            <span className="resource-code">{item.code}</span>
            <span className="resource-name">{item.name}</span>
            <span className="resource-arrow">{item.hasNotes ? '→' : '(coming soon)'}</span>
          </div>
        ))}
      </div>

      {selectedResource && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div>
                <h2>{selectedResource.code}</h2>
                <p>{selectedResource.name}</p>
              </div>
              <button className="close-button" onClick={closeModal}>
                ✕
              </button>
            </div>
            <div className="modal-body">
              <iframe 
                src={selectedResource.notionLink}
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowFullScreen
                title={`${selectedResource.code} Notes`}
              />
            </div>
          </div>
        </div>
      )}

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