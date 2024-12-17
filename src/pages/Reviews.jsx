import { ReviewsList } from "../assets/ReviewsList";
import Review from "../components/Review";
import { useLanguage } from "../context/LanguageContext";
import "../components/Reviews.css";
import { Animation } from "../components/Animation";
import { useState } from "react";

export function Reviews() {
  const { language } = useLanguage();
  const [event, setEvent] = useState(ReviewsList);
  function left() {
    setEvent((prev) => [...prev.slice(-3), ...prev.slice(0, -3)]);
  }

  function right() {
    setEvent((prev) => [...prev.slice(3), ...prev.slice(0, 3)]);
  }

  return (
    <div>
      {/* <Animation textIt={"Recensioni"} textEng={"Reviews"} /> */}
      <div className="reviewCardsContainer">
        <img
          src="src\assets\arrowtop.png"
          alt="arrowleft"
          className="arrowLeft"
          onClick={left}
        />
        {event.slice(0, 3).map((review) => (
          <Review
            key={review.id}
            stars={review.starNumber}
            review={language === "it" ? review.reviewIt : review.reviewEng}
            title={language === "it" ? review.titleIt : review.titleEng}
            date={review.date}
            name={review.name}
            image={review.image}
            imageClass="reviewImage"
          />
        ))}
        <img
          src="src\assets\arrowtop.png"
          alt="arrowright"
          className="arrowRight"
          onClick={right}
        />
      </div>
    </div>
  );
}
