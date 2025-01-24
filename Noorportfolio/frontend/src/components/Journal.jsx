import React, { useEffect } from "react";
import "../App.css";

const Journal = () => {
  useEffect(() => {
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    return () => {
      darkModeToggle.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div>
      <h1>MY UNI JOURNAL</h1>
      <section className="timeline">
        <div className="timeline-event">
          <h3>February 2023 - August 2023</h3>
          <p>
            Began my university journey at UTS doing a bachelor of cybersecurity
            and criminology. Completed web systems, digital trace and identity,
            network fundamentals, and introduction to criminology.
          </p>
        </div>
        <div className="timeline-event">
          <h3>August - December 2023</h3>
          <p>
            Transferred to UNSW Bachelor of Computer Science. Undertook an
            introductory course in C programming, acquiring skills in structured
            programming and problem solving.
          </p>
        </div>
        <div className="timeline-event">
          <h3>January - February 2024</h3>
          <p>
            Created a time-based personal profile site using HTML, CSS & JAVA
            which helped me enter the DEVSOC training program as a Trainee.
          </p>
          <a
            href="https://noorbabar.github.io/noors-website/"
            target="_blank"
            rel="noopener noreferrer"
            className="website"
          >
            Visit My Website
          </a>
        </div>
        <div className="timeline-event">
          <h3>February - May 2024</h3>
          <p>Drowned in math subjects.</p>
          <p>
            Developed and Designed a goal and task tracking app utilising
            JavaScript and React alongside two other trainees as part of the DEVSOC
            Training Program.
          </p>
          <a
            href="https://achievemint.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="website"
          >
            Visit our WebApp
          </a>
        </div>

        <div className="timeline-event">
          <h3>May - August 2024</h3>
          <p>
            Undertaking Data Structures & Algorithms & Software Engineering
            Fundamentals
          </p>
        </div>
        <div className="timeline-event">
          <h3>September - Present 2024</h3>
          <p>Undertaking Computer System Fundamentals & Introduction to Networking and Security</p>
        </div>
      </section>
    </div>
  );
};

export default Journal;
