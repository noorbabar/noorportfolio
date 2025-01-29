import React from "react";
import "../App.css"; 

const articles = [

  {
    title: "How to get started on LeetCode",
    date: "January 2025",
    content: "Ever heard of LeetCode but felt too intimidated to try? You’re not alone.When I first opened LeetCode, I felt completely lost—hundreds of problems, different difficulty levels, and no idea where to start. But as I stuck with it, I realised it wasn’t just about coding interviews; it was about sharpening problem-solving skills, learning to break down complex problems, and writing efficient code. Here’s how I got started, and how you can too! ",
    link: "#",
  },

];

const Articles = () => {
  return (
    <div className="articles-page">
      <h1 className="about-me-heading">ARTICLES</h1>
      <div className="articles-list">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <h2> {article.title}</h2>
            <p className="article-date">{article.date}</p>
            <p className="article-snippet">{article.content}</p>
            <a href={article.link} className="read-more-link">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
