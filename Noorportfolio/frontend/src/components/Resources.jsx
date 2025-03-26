import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import "../App.css";

const Resources = () => {
  const [openSubjects, setOpenSubjects] = useState({});
  const resources = [
    {
      subject: "C Programming Fundamentals",
      notes: [
        { title: "Intro to C", link: "/intro-to-c" },
        { title: "Variables: Data Types", link: "/variables" },
        { title: "Control Flow: If/Else Statements", link: "/statements" },
        { title: "Loops: While & For", link: "/loops" },
        { title: "Custom Data Types: Structs & Enums", link: "/custom" },
        { title: "Functions & Procedures (Void Functions)", link: "/functions" },
        { title: "Arrays", link: "/arrays" },
        { title: "Strings", link: "/strings" },
        { title: "2D Arrays", link: "/di-arrays" },
        { title: "Command Line Arguments", link: "/arguments" },
        { title: "Pointers", link: "/pointers" },
        { title: "Dynamic Arrays & Memory", link: "/memory" },
        { title: "Linked Lists", link: "/linked-lists" },
        { title: "C Programming Practice: Questions and Solutions", link: "/code" },
      ],
    },
    {
        subject: "Data Structures & Algorithms",
        notes: [
          { title: "Recursion", link: "/recursion" },
        ],
      },
      {
        subject: "LeetCode Resources",
          notes: [
            { title: "Collection Of Useful LeetCode Links", link: "/problems" },

          ],
        },
        {
            subject: "the rest will be published once i get time!",
              notes: [
                { title: "incoming notes include infs1701, comp1521, comp2511, comp1531, infs2701,comp6441, comp3121"},

              ],
            },
  ];

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
        <h3> these are a compilation of my notes & resources :)</h3>
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
                  <Link to={note.link} className="resource-link">
                    <i className="fas fa-file-alt"></i> 
                    {note.title}
                  </Link>
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
