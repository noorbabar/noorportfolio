import React, { useState } from "react";
import "../style/resources.css";

const Resources = () => {
  const [selectedResource, setSelectedResource] = useState(null);
  const [activeTab, setActiveTab] = useState('unsw');

  const unswCourses = [
    { 
      name: "C Programming Fundamentals", 
      code: "COMP1511", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//20b955cde43a81d490cbe004b7941ed2",
      hasNotes: true,
      summary: {
        topics: ["Control Flow", "Functions", "Arrays", "Pointers", "Structs", "Linked Lists", "File I/O", "Memory Management"],
        highlights: "Intro to C programming fundamentals including pointers, dynamic memory allocation, and data structures"
      }
    }, 
    { 
      name: "Data Structures & Algorithms", 
      code: "COMP2521", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//151955cde43a807eb33afe0bf396b750",
      hasNotes: true,
      summary: {
        topics: ["Algorithm Analysis", "Sorting", "Searching", "Linked Lists", "Trees", "Graphs", "Hash Tables", "Abstract Data Types"],
        highlights: "In depth analysis of fundamental data structures, algorithm complexity analysis, and graph algorithms"
      }
    },
    { 
      name: "Software Engineering Fundamentals", 
      code: "COMP1531", 
      hasNotes: false 
    },
    { 
      name: "Intro to Networking & Security (HD)",
      code: "INFS1701", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//20b955cde43a812286e6c8321d03cfea",
      hasNotes: true,
      summary: {
        topics: ["TCP/IP", "Network Protocols", "CIA Triad", "Security Controls", "NIST Framework", "Risk Assessment", "Data Privacy"],
        highlights: "Foundation in networking fundamentals and cybersecurity management principles"
      }
    },
    { 
      name: "Cybersecurity Management", 
      code: "INFS2701", 
      hasNotes: false 
    },
    { 
      name: "Intro to Cyber Security & Security Engineering (HD)", 
      code: "COMP6441", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//20b955cde43a81b596c0f8a41953b69f",
      hasNotes: true,
      summary: {
        topics: ["Security Engineering", "Cryptography", "CIA Triad", "Password Security", "Data Privacy", "Human Factors", "Historical Context"],
        highlights: "introduction to security engineering principles, cryptographic fundamentals, and security mindset development"
      }
    },
    { 
      name: "Object Oriented Programming", 
      code: "COMP2511", 
      hasNotes: false 
    },
    { 
      name: "Professional Issues and Ethics in IT (HD/CM)",
      code: "COMP4920", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//26e955cde43a8032baf2d36682518842",
      hasNotes: true,
      summary: {
        topics: ["Ethical Theories", "Utilitarianism", "Deontology", "Virtue Ethics", "AI Ethics", "Privacy", "Intellectual Property", "Professional Conduct"],
        highlights: "Explored philosophical foundations of ethics and their application to modern technology challenges"
      }
    },
  ];

  const selfStudy = [
    { 
      name: "PortSwigger Web Security Academy", 
      code: "PORTSWIGGER", 
      notionLink: "https://gleaming-xylophone-d5a.notion.site/ebd//2e4955cde43a807e9f84fc982c90326a",
      hasNotes: true,
      summary: {
        topics: ["SQL Injection", "XSS", "CSRF", "Authentication", "Access Control", "SSRF", "XXE", "Path Traversal"],
        highlights: "Self study through structured learning paths"
      }
    },
    { 
      name: "CTF Challenges & Writeups", 
      code: "CTF", 
      hasNotes: false 
    },
    { 
      name: "LeetCode & Algorithm Practice", 
      code: "LEETCODE", 
      hasNotes: false 
    },
  ];

  const upcoming = [
    "COMP6443", "COMP2041", "COMP3121", 
    "COMP6448", "COMP6080", "COMP3900",
    "COMP6445", "COMP1521"
  ];

  const handleResourceClick = (item) => {
    if (item.hasNotes) {
      setSelectedResource(item);
    }
  };

  const closeModal = () => {
    setSelectedResource(null);
  };

  const currentResources = activeTab === 'unsw' ? unswCourses : selfStudy;

  return (
    <div className="resources-section">
      <h1>resources</h1>
      <p className="employer-note">
        <strong>click on any course to view summary or access my notes.</strong>
      </p>    
      <div className="tab-container">
        <div className="tab-switcher">
          <button 
            className={`tab ${activeTab === 'unsw' ? 'active' : ''}`}
            onClick={() => setActiveTab('unsw')}
          >
            UNSW Courses
          </button>
          <button 
            className={`tab ${activeTab === 'self-study' ? 'active' : ''}`}
            onClick={() => setActiveTab('self-study')}
          >
            Self Study
          </button>
        </div>
        <span className="tab-hint">
          ↑ click tabs to switch ↑
        </span>
      </div>

      <div className="terminal-box">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
        </div>
        <div className="terminal-content">
          <p>$ ls ~/courses/{activeTab === 'unsw' ? 'unsw' : 'self-study'} --detailed</p>
          <p className="terminal-output">━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
          {currentResources.map((item, index) => (
            <p 
              key={index} 
              className={`course-file ${item.hasNotes ? '' : 'coming-soon'}`}
              onClick={() => handleResourceClick(item)}
            >
              <span className="file-icon">→</span> {item.code} - {item.name}
              {!item.hasNotes && <span className="coming-soon-label"> ({activeTab === 'unsw' ? 'notes coming soon' : 'in progress'})</span>}
            </p>
          ))}
          
        </div>
      </div>

      {activeTab === 'unsw' && (
        <div className="additional-courses-note">
          <p>
            also completed: MATH1131, MATH1231, MATH1081, world religions, web systems, intro to crim, web systems & digital trace. 
            not documented as my portfolio focuses on CS / cyber security.
          </p>
        </div>
      )}

      {selectedResource && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content native-content" onClick={(e) => e.stopPropagation()}>
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
              <div className="native-notes">
                <div className="note-section">
                  <h3>Topics Covered</h3>
                  <div className="topics-grid">
                    {selectedResource.summary.topics.map((topic, i) => (
                      <span key={i} className="topic-tag">{topic}</span>
                    ))}
                  </div>
                </div>
                
                <div className="note-section">
                  <h3>Key Highlights</h3>
                  <p>{selectedResource.summary.highlights}</p>
                </div>
                
                <a 
                  href={selectedResource.notionLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="view-full-notes"
                >
                  View Full Detailed Notes on Notion →
                </a>
              </div>
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