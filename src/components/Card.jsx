import React from "react";
import "./Card.css";

export default function Card({ title, content, image }) {
  return (
    <div className="card">
      {image && <img src={image} alt={title} className="card-image" />}
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}
