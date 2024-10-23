import React from "react";
import "./components/Card.css";
export function Cards({ title, content, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}
