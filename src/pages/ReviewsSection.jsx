import React from "react";
import "./ReviewsSection.css";
import { useLanguage } from "../context/LanguageContext";

const ReviewsSection = () => {
  const { language } = useLanguage();
  return (
    <div className="reviews-section-container">
      <h1 className="reviews-section">
        {language === "it" ? "Recensioni dei " : "Reviews from "}
        <span className="style-text-reviews">
          {language === "it" ? "nostri clienti" : "our customers"}
        </span>
      </h1>
    </div>
  );
};

export default ReviewsSection;
