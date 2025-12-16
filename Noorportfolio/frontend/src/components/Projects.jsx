import React from "react";
import '../style/projects.css';

const Projects = () => {
  const projects = [
    {
      name: "Portfolio Website",
      description: "Personal portfolio (this website)",
      github: "https://github.com/noorbabar/noorportfolio",
      demo: "https://noorsportfolio.vercel.app/"
    },
    {
      name: "Lock Step",
      description: "Cybersecurity Toolkit for Small Businesses",
      github: "https://github.com/noorbabar/cybersecurity-toolkit",
      demo: "https://lock-step.vercel.app/"
    },
    {
      name: "AchieveMint",
      description: "A web app to track & achieve your goals",
      github: "https://github.com/devsoc-unsw/trainee-saturn-24t1",
      demo: "https://achievemint.vercel.app/"
    },
    {
      name: "TrackBite",
      description: "In Progress: A Calorie Tracker & Wellness Companion",
      github: "https://github.com/noorbabar/TrackBite",
      // demo: "https://track-bite.vercel.app/"
    },
     {
      name: "ForgeHack: Assignee Recommender Agent",
      description: "A Rovo Agent that assigns Jira issues to team members based on past work history, availability, expertise and more with recommendations.",
      github: "https://github.com/noorbabar/forgehack-forgezilla",
    },
  ];

  return (
    <section className="projects-section">
      <h1>projects</h1>
      <p className="section-description">
        things i've built and worked on.
      </p>
      
      <div className="terminal-box">
        <div className="terminal-header">
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
          <span className="terminal-dot"></span>
        </div>
        <div className="terminal-content">
          <p>$ ls projects/</p>
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <p key={index} className="project-file">{project.name}/</p>
            ))
          ) : (
            <p className="muted">[adding projects soon...]</p>
          )}
        </div>
      </div>

      {projects.length > 0 && (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-links">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i> view code
                </a>
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i> live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;