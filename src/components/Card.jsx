import React, { useState } from "react";
import "./Card.css";

export default function Card({ title, content, image }) {
  const [hidden, setHidden] = useState(true);

  function handleToggle() {
    {
      hidden ? setHidden(false) : setHidden(true);
    }
  }
  return (
    <div
      className="card"
      style={hidden ? { height: "250px" } : { height: "300px" }}
      onClick={handleToggle}
    >
      <div className="card-wrapper">
        {image && <img src={image} alt={title} className="card-image" />}
        <h2 className="card-title">{title}</h2>
        {!hidden && <p className="card-content">{content}</p>}
      </div>
    </div>
  );
}
