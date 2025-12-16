import React from "react";
import "../style/articles.css";

const Blog = () => {
  return (
    <div className="blog-section">
      <h1>blog</h1>
      <p className="section-description">
        thoughts on security, coding, and learning. coming soon.
      </p>

      <div className="blog-placeholder">
        <div className="blog-card">
          <div className="blog-date">tbd</div>
          <h3>first post incoming</h3>
          <p className="blog-snippet">
            working on it. probably something about ctfs or my learning journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;