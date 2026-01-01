import React from "react";
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
          <div className="blog-date">tbd</div>
          <h3>first post incoming</h3>
          <p className="blog-snippet">
            writing it (maybe)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;