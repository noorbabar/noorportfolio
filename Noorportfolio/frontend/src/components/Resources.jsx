import React, { useState } from "react";
import "../App.css"; 

const resources = [
  {
    subject: "C Programming Fundamentals (COMP1511)",
    notes: [
      { title: "Intro To C", link: "#" },
      { title: "Data Types/Variables/Constants", link: "#" },
      { title: "Input & Output Statements", link: "#" },
      { title: "Loops, Structs & Enums", link: "#" },
      { title: "Functions & Command line arguments", link: "#" },
      { title: "Arrays & Strings", link: "#" },
      { title: "Pointers", link: "#" },
      { title: "Memory Management", link: "#" },
      { title: "Linked Lists", link: "#" },
      { title: "C Questions & Solutions", link: "#" },
    ],
  },
  {
    subject: "Computer System Fundamentals (COMP1521)",
    notes: [
      { title: "coming soon", link: "#" },
    ],
  },
  {
    subject: "Data Structures & Algorithms (COMP2521)",
    notes: [
        { title: "coming soon", link: "#" },
    ],
  },
  {
    subject: "LeetCode Problem Set Links",
    notes: [
       { title: "coming soon", link: "#" },
     ],
   },
   {
    subject: "LeetCode Problem Set Solutions",
    notes: [
       { title: "coming soon", link: "#" },
     ],
   },
  {
    subject: "Software Engineering Fundamentals (COMP1531)",
    notes: [
      { title: "coming soon", link: "#" },
    ],
  },
  {
    subject: "Introduction to Networking & Cybersecurity (INFS1701)",
    notes: [
      { title: "coming soon", link: "#" },
    ],
  },
  {
   subject: "Object Oriented Design & Programming (COMP2511)",
   notes: [
      { title: "course is currently being taken", link: "#" },
    ],
  },
  {
    subject: "Managing Cybersecurity in the Digital Age (INFS2701)",
    notes: [
      { title: "course is currently being taken", link: "#" },
    ],
  },

];

const Resources = () => {
  const [openSubjects, setOpenSubjects] = useState({});

  const toggleSubject = (index) => {
    setOpenSubjects((prev) => ({
      ...prev,
      [index]: !prev[index], 
    }));
  };

  return (
    <div className="resources-container">
      <div className="sidebar">
        <h1 className="about-me-heading">RESOURCES</h1>
        {resources.map((subject, index) => (
          <div key={index} className="subject">
            <div 
              className="subject-title" 
              onClick={() => toggleSubject(index)}
            >
              {subject.subject}
              <span className={`arrow ${openSubjects[index] ? "open" : ""}`}>&#9654;</span>
            </div>
            <ul className={`notes-list ${openSubjects[index] ? "show" : ""}`}>
              {subject.notes.map((note, idx) => (
                <li key={idx} className="note-item">
                  <a href={note.link} className="resource-link">
                    <i className="fas fa-file-alt"></i> {/* Page icon */}
                    {note.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
