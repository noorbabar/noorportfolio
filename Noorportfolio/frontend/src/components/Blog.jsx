import React from "react";
import "../App.css"; 
import '../style/articles.css'; 

const articles = [

  {
    title: "will add in my blogs",
    date: "once i have time",
    content: "coming soon",
    link: "#",
  },

];

const Articles = () => {
  return (
    <div className="articles-page">
      <h1 className="about-me-heading">BLOGS</h1>
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
