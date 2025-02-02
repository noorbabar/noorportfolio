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
        { title: "Variables", link: "/variables" },
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
        <h3> just some notes from a few courses i’ve taken,& resources that might help other comp sci students :)</h3>
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
