import React from "react";
import { Link } from "react-router-dom";
import "../style/articles.css";

const Blog = () => {
  return (
    <div className="blog-section">
      <h1>blog</h1>
      <p className="section-description">
        documenting my learning journey, ctf write-ups, and insights into cybersecurity and programming.
      </p>

      <div className="blog-placeholder">
        <div className="blog-card">
          <div className="blog-date">february 2026</div>
          <h3>creating a web application </h3>
          <p className="blog-snippet">
          how to set up your first github repo and create a simple web app. 
          </p>
          <Link to="/guides/react-setup" className="blog-link">
            view guide →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;