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
      <h2 className="about-me-heading">MY UNI TIMELINE</h2>
      <section className="timeline">
        <div className="timeline-event">
          <h3>February 2023 - September 2023</h3>
          <p>
            Began my university journey at UTS doing a bachelor of cybersecurity
            and criminology. Completed web systems, digital trace and identity,
            network fundamentals, and introduction to criminology.
          </p>
        </div>
        <div className="timeline-event">
          <h3>September - November 2023</h3>
          <p>
            Transferred to UNSW Bachelor of Computer Science. Undertook an
            introductory course in C programming.
          </p>
        </div>
        <div className="timeline-event">
          <h3>November - February 2024</h3>
          <p>
            Summer break!
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
            Undertaking a Gen Ed (World Religions) & Software Engineering
            Fundamentals
          </p>
        </div>
        <div className="timeline-event">
          <h3>September - November 2024</h3>
          <p> Undertaking Data Structures & Algos & Introduction to Networking and Security</p>
        </div>
        <div className="timeline-event">
        <h3>January - February 2025</h3>
        <p>Summer Break! </p>
        <p>Undertaking a general education </p>
        </div>
        <div className="timeline-event">
        <h3>February - May 2025</h3>
        <p>Undertaking 2511,INFS2701,MATH1081 </p>

        </div>
      </section>
    </div>
  );
};

export default Journal;
